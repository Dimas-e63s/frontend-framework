import { div } from "./element";

export const User = ({ firstName, lastName }) =>
  div`Hello ${firstName} ${lastName}`;
