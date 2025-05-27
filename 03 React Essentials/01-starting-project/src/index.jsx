import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
// ReeactDom.createRoot(entryPoint).render(React.createElement(App));
//jsx없이 랜더링 하는방법
