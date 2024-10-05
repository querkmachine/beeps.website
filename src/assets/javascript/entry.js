async function importModule(name) {
  const $elements = document.querySelectorAll(`[data-js='${name}']`);
  if ($elements.length > 0) {
    const { default: module } = await import(`./${name}.js`);
    $elements.forEach(($e) => {
      new module($e);
    });
  }
}

importModule("image-differ");
importModule("scroll-sync");
importModule("share");
importModule("tabs");
importModule("toc");
