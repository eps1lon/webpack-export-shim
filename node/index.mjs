import * as module from "./module.mjs";

if (module.useId !== undefined) {
  console.log("module.useId() is safe");
} else {
  console.log("useId not exported from module");
}
