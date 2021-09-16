import "./styles.css";
import React from "react";
import Oven from "./Oven";
import Sink from "./Sink";

export default function Kitchen(props) {
  return (
    <div className="Container">
      <div>Kitchen</div>
      <Oven />
      <Sink />
      </div>
  );
}
