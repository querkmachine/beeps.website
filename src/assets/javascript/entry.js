async function importModule(name) {
  const { default: module } = await import(`./${name}.js`);
  new module();
}

async function importModuleIfPresent(name, customSelector) {
  const selector = customSelector ?? `[data-js='${name}']`; 
  const $elements = document.querySelectorAll(selector);
  if ($elements.length > 0) {
    const { default: module } = await import(`./${name}.js`);
    $elements.forEach(($e) => {
      new module($e);
    });
  }
}

importModuleIfPresent("copy-code", ".kimCodeBlock");
importModuleIfPresent("image-differ");
importModuleIfPresent("scroll-sync");
importModuleIfPresent("share");
importModuleIfPresent("tabs");
importModuleIfPresent("toc");
importModule("zhat-ying-zhing");
