import React from "react";
// import ReactDom  from "react-dom";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app";

createRoot(document.getElementById("root")).render(<App />); // новый синтаксис через createRoot
// ReactDom.render(element, document.getElementById('root')) // старый синтаксис через reactDom
