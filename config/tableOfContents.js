import { parse } from "node-html-parser";

const findHeadings = function (html, headingLevels) {
  const root = parse(html);
  return root.querySelectorAll(headingLevels.join(","));
};

const getTableOfContents = function (html, args = {}) {
  const defaults = {
    headingLevels: ["h2", "h3"],
  };
  const settings = { ...defaults, ...args };
  const rawHeadings = findHeadings(html, settings.headingLevels);

  // Add a 'level' property that's the h-element but without the h
  let headings = rawHeadings.map((h) => {
    return {
      id: h.id,
      html: h.innerHTML,
      level: Number(h.rawTagName.substring(1)),
    };
  });

  // Remove entries with no `id` as we can't link to them
  headings = headings.filter((h) => h.id);

  // Store the final array
  const headingData = [];

  // Track nested headings
  const stack = [];

  // Loop through the headings to nest them according to their heading level
  headings.forEach((item) => {
    const newItem = {
      ...item,
      children: [],
    };

    if (stack.length === 0) {
      // If there's nothing in the stack (i.e. this is the first iteration of the
      // loop), just push it
      headingData.push(newItem);
    } else {
      // Get the most recently pushed item from the stack
      const parent = stack[stack.length - 1];

      if (item.level > parent.level) {
        // If this item's level is greater than the parent, it's a child,
        // so nest it against the parent object
        parent.children.push(newItem);
      } else {
        // Go back through the stack, removing items until we find something
        // that is a parent
        while (
          stack.length > 0 &&
          item.level <= stack[stack.length - 1].level
        ) {
          stack.pop();
        }

        if (stack.length > 0) {
          // If a parent's found, nest things under it
          stack[stack.length - 1].children.push(newItem);
        } else {
          // Otherwise, just put it on the stack's root level
          headingData.push(newItem);
        }
      }
    }

    // Push item to the stack
    stack.push(newItem);
  });

  return headingData;
};

export { getTableOfContents };
