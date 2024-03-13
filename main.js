import "./base.css";
import "./style.css";
import { fragShader } from "./frag.js";
import { setupCanvases } from "./canvas.js";

document.addEventListener("DOMContentLoaded", () => {
  setupCanvases(fragShader);
});
