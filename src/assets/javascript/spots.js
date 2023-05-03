class Spots {
  constructor($element, options = {}) {
    if (!$element) {
      return;
    }

    const defaultOptions = {
      isAnimated: false,
      intervalBetweenSpots: 200,
      heightProportion: 1,
    };
    this.settings = { ...defaultOptions, ...options };

    this.$canvas = $element;
    this.ctx = this.$canvas.getContext("2d");

    this.animated = this.settings.isAnimated;
    this.playing = this.animated;
    this.lastSpotTimestamp = null;
    this.spots = [];
    this.prefersReducedMotion = matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Wait until the page has finished loading other stuff. Pretty much all of
    // it is higher priority than our fun spot decor
    window.addEventListener("load", () => {
      // Let's gooooooo
      this.$canvas.removeAttribute("hidden");
      this.setCanvasDimensions();
      this.setStrokeColor();
      this.setupObservers();
      this.play();
    });
  }

  setCanvasDimensions() {
    this.canvasBox = this.$canvas.getBoundingClientRect();
    this.$canvas.width = this.canvasBox.width;
    this.$canvas.height = this.canvasBox.height;
    this.spotTarget = Math.floor(
      (this.$canvas.width * this.$canvas.height) / 50000
    );
  }

  setStrokeColor() {
    this.strokeColor =
      document.documentElement.dataset.colorScheme === "light"
        ? [179, 255, 179]
        : [221, 96, 49];
  }

  setupObservers() {
    // Resize observer to resize the canvas as needed
    new ResizeObserver(() => {
      this.pause();
      this.setCanvasDimensions();
      this.play();
    }).observe(this.$canvas);

    // Mutation observer to see if the colour scheme has been changed
    new MutationObserver((mutations) => {
      if (mutations[0].attributeName !== "data-color-scheme") {
        return;
      }
      this.pause();
      this.setStrokeColor();
      this.play();
    }).observe(document.documentElement, { attributes: true });
  }

  tick(timestamp) {
    // If paused, stop doing anything
    if (!this.playing) {
      return;
    }

    // Clear current canvas
    this.clearCanvas();

    // If spots array is empty (e.g. this is our first loop), add a spot immediately
    if (this.spots.length === 0) {
      this.addNewSpot(timestamp);
    }

    // Random chance to introduce a new spot to the canvas
    else if (
      timestamp >=
        this.lastSpotTimestamp + this.settings.intervalBetweenSpots &&
      !(this.spots.length >= this.spotTarget)
    ) {
      this.addNewSpot(timestamp);
    }

    // Loop through all existing spots and paint them on
    this.paintSpots();

    // Progress the data in the spots array
    this.processSpots();

    // Loop around again!
    window.requestAnimationFrame(this.tick.bind(this));
  }

  paintReducedMotionSpots() {
    this.spots = [];
    this.clearCanvas();
    for (let i = 0; i < this.spotTarget; i++) {
      this.addNewSpot(Date.now(), this.randomNumber(10, 100));
    }
    this.paintSpots();
  }

  addNewSpot(timestamp, startingSize = 1) {
    this.spots.push({
      size: startingSize,
      growthFactor: this.randomNumber(0.01, 0.25),
      x: this.randomNumber(0, this.$canvas.width),
      y: this.randomNumber(
        0,
        this.$canvas.height * this.settings.heightProportion
      ),
      opacity: this.randomNumber(0.125, 0.6),
    });
    this.lastSpotTimestamp = timestamp;
  }

  processSpots() {
    let spotArray = this.spots;

    // Increment the size by 1
    // Decrement the opacity by 0.01
    spotArray.forEach((s) => {
      s.size += s.growthFactor;
      s.opacity -= 0.001;
      s.x -= s.growthFactor / 2;
      s.y -= s.growthFactor / 2;
    });

    // Remove any that are at opacity 0
    spotArray = spotArray.filter((s) => s.opacity > 0);

    this.spots = spotArray;
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  paintSpots() {
    this.spots.forEach((s) => {
      this.ctx.fillStyle = `rgba(${this.strokeColor.join()}, ${s.opacity})`;
      this.ctx.beginPath();
      this.ctx.fillRect(s.x, s.y, s.size, s.size);
      this.ctx.stroke();
    });
  }

  randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  pause() {
    this.playing = false;
  }

  play() {
    if (this.prefersReducedMotion || !this.animated) {
      this.paintReducedMotionSpots();
    } else {
      this.playing = true;
      window.requestAnimationFrame(this.tick.bind(this));
    }
  }
}
