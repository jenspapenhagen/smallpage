import React from "react";
import ReactDOM from "react-dom";
import { FetchComponent } from "./FetchComponent";

const App = () => (
  <FetchComponent />
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
