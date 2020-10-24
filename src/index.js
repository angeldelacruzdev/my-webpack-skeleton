import _ from "lodash";
import { showDialog } from "./showDialog";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["hello", "webpack"], "");

  return element;
}

document.body.appendChild(component());

document.getElementById("click").addEventListener("click", showDialog);
