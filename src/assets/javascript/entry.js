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

importModuleIfPresent("image-differ");
importModuleIfPresent("lastfm");
importModuleIfPresent("masthead");
importModuleIfPresent("scroll-sync");
importModuleIfPresent("share");
importModuleIfPresent("tabs");
importModule("zhat-ying-zhing");
