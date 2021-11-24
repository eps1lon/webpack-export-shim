import * as React from "react";
import * as ReactDOM from "react-dom";

function useId() {
  if (React.useId !== undefined) {
    return React.useId();
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
