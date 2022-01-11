import { init } from "./core/index";
import { User } from "./core/user";

const firstName = "Dmitriy";
const lastName = "Smal";

init("#app", User({ firstName, lastName }));
