const createElement =
  (tagName) =>
  (strings, ...args) => ({
    type: tagName,
    template: strings.reduce(
      (acc, currString, idx) => acc + currString + (args[idx] || ""),
      ""
    ),
  });

export const div = createElement("div");
export const p = createElement("p");
