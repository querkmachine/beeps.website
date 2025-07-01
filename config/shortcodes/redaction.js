/**
 * For when something gets Fahrenheit 451'd.
 */

const redactionShortcode = function (length, notice = null) {
  const spaces = [];
  let curWordLength = 0;

  // The blocks text are placed with are quite wide, so half this
  length = Math.floor(length / 2);

  for (let i = 0; i < Number(length); i++) {
    spaces.push("&#9608;");
    curWordLength++;

    if (curWordLength > 8 || (curWordLength > 0 && Math.random() < 0.15)) {
      spaces.push(" ");
      curWordLength = 0;
    }
  }

  notice = notice ?? "This content has been redacted for legal reasons.";
  return `<span class="kimRedaction" title="${notice}"><span class="kim-!-visually-hidden">This content has been redacted for legal reasons.</span><span aria-hidden="true">${spaces.join("")}</span></span>`;
};

export default redactionShortcode;
