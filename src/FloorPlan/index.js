import { StrictMode } from "react";
import ReactDOM from "react-dom";

import FloorPlan from "./FloorPlan";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <FloorPlan />
  </StrictMode>,
  rootElement
);
