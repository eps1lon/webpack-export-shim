import * as React from "react";
import * as ReactDOM from "react-dom";

const maybeReactUseId = React["useId" + ""];

function useId() {
  if (maybeReactUseId !== undefined) {
    return maybeReactUseId();
  }
  return "shimmed";
}

function App() {
  const id = useId();

  return id;
}

const container = document.createElement("div");
document.body.appendChild(container);

ReactDOM.render(React.createElement(App), container);
