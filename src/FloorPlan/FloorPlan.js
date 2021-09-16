import "./styles.css";
import React from "react";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

export default function FloorPlan(){
  
    return (
      <div className="Container">
        <div className="Kitchen">
        <Kitchen />
        </div>
        <LivingRoom />
        <div className="Bedroom1">
          <Bedroom bednum="1" />
        </div>
        <div className="Bedroom2">
          <Bedroom bednum="2" />
        </div>
        <div className="Bedroom3">
          <Bedroom bednum="3" />
        </div>
        <div className="Half-Bath">
          <Bath size="Half"/>
        </div>
        <div className="Full-Bath">
          <Bath size="Full"/>
        </div>
      </div>
    );
}