async function importModule(name) {
  const { default: module } = await import(`./${name}.js`);
  new module();
}

async function importModuleIfPresent(name) {
  const $elements = document.querySelectorAll(`[data-js='${name}']`);
  if ($elements.length > 0) {
    const { default: module } = await import(`./${name}.js`);
    $elements.forEach(($e) => {
      new module($e);
    });
  }
}

async function importEggy(name, activationPhrase) {
  let keypresses = [];

  if (localStorage.getItem(activationPhrase) === "true") {
    await importModule(name);
  }

  document.addEventListener("keyup", async (event) => {
    keypresses.push(event.key);
    keypresses = keypresses.slice(0 - activationPhrase.length);

    if (
      keypresses.join("").toUpperCase().includes(activationPhrase.toUpperCase())
    ) {
      await importModule(name);
    }
  });
}

importModuleIfPresent("fauxvertisements");
importModuleIfPresent("image-differ");
importModuleIfPresent("lastfm");
importModuleIfPresent("masthead");
importModuleIfPresent("share");
importModuleIfPresent("tabs");
importEggy("zhat-ying-zhing", "zatzhing");
