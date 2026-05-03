import { chat } from "./openrouter.js";

const res = await chat([
  { role: "user", content: "Write a 3-line website hero copy" }
]);

console.log(res);