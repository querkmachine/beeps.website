export default class Spots {
  constructor($element, options = {}) {
    // Don't run if the target element is missing or if a forced colours mode
    // is active
    if (!$element || matchMedia("(forced-colors: active)").matches) {
      return;
    }

    const defaultOptions = {
      isAnimated: false,
      useCalendarThemes: false,
      intervalBetweenSpots: 200,
      heightProportion: 1,
      spotMultiplier: 1,
      colors: [],
    };
    this.settings = { ...defaultOptions, ...options };

    this.$canvas = $element;
    this.ctx = this.$canvas.getContext("2d");

    this.animated = this.settings.isAnimated;
    this.playing = this.animated;
    this.lastSpotTimestamp = null;
    this.spots = [];
    this.prefersReducedMotion = matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    this.prefersLightMode = matchMedia("(prefers-color-scheme: light)").matches;

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
      ((this.$canvas.width * this.$canvas.height) / 50000) *
        this.settings.spotMultiplier,
    );
  }

  setStrokeColor() {
    // If colours overidden
    if (this.settings.colors.length) {
      this.strokeColors = this.settings.colors;
      return;
    }

    // Default colours
    this.strokeColors = this.prefersLightMode
      ? [[179, 255, 179]]
      : [[120, 105, 153]];

    if (this.settings.useCalendarThemes) {
      // Some days have unique colours, so get the date.
      // This is in format MM-DD (no year)
      const today = new Date().toISOString().substring(5, 10);

      switch (today) {
        case "03-31":
        case "11-20":
          // Transgender Day of Visibility
          // Transgender Day of Remembrance
          this.strokeColors = [
            [255, 255, 255],
            [91, 206, 250],
            [245, 169, 184],
          ];
          break;
        case "04-05":
          // First Contact Day
          this.strokeColors = [
            [234, 80, 80],
            [251, 198, 54],
            [56, 150, 230],
          ];
          break;
        case "04-06":
          // International Asexuality Day
          this.strokeColors = [
            [0, 0, 0],
            [255, 255, 255],
            [163, 163, 163],
            [140, 34, 119],
          ];
          break;
        case "05-19":
          // Agender Pride Day
          this.strokeColors = [
            [0, 0, 0],
            [255, 255, 255],
            [185, 185, 185],
            [190, 244, 144],
          ];
          break;
        case "09-22":
          // Birthday
          this.strokeColors = [
            [210, 67, 95],
            [255, 125, 69],
            [245, 223, 133],
            [118, 193, 150],
            [98, 150, 202],
            [97, 59, 143],
          ];
          break;
        case "12-24":
        case "12-25":
        case "12-26":
          // Christmas period
          this.strokeColors = [
            [40, 165, 131],
            [40, 86, 12],
            [201, 3, 11],
            [253, 59, 74],
            [255, 255, 255],
          ];
          break;
      }
    }
  }

  setupObservers() {
    // Resize observer to resize the canvas as needed
    new ResizeObserver(() => {
      this.pause();
      this.setCanvasDimensions();
      this.play();
    }).observe(this.$canvas);

    // Media query event to see if the colour scheme has been changed
    window
      .matchMedia("(prefers-color-scheme)")
      .addEventListener("change", () => {
        this.pause();
        this.setStrokeColor();
        this.play();
      });
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
        this.$canvas.height * this.settings.heightProportion,
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
      this.ctx.globalAlpha = s.opacity;
      this.ctx.fillStyle = `rgb(${this.randomColor().join()})`;
      this.ctx.beginPath();
      this.ctx.fillRect(s.x, s.y, s.size, s.size);
      this.ctx.stroke();
    });
  }

  randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  randomColor() {
    if (this.strokeColors.length === 1) {
      return this.strokeColors[0];
    }

    const randomIndex = Math.round(
      this.randomNumber(0, this.strokeColors.length - 1),
    );
    const color = this.strokeColors[randomIndex];

    return color;
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
