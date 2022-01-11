export const init = (selector, { type, template }) => {
  const app = document.querySelector(selector);
  const newElement = document.createElement(type);
  const newTextContent = document.createTextNode(template);

  newElement.append(newTextContent);
  app.append(newElement);
};
