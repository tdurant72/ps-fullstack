import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import { Main } from "./components/Main.jsx";

ReactDOM.render(<Main />, document.getElementById("app"));
// console.log(store.getState());
