import { div } from "./element";
import { onClick } from "./event";

export const User = ({ firstName, lastName }) =>
  div`${onClick(() => alert(firstName))} Hello ${firstName} ${lastName}`;
