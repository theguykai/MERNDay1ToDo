import { useState, useEffect } from "react";
import axios from "axios";

const Card = (props) => {
  return (
    <div>
      <div className="flex items-center gap-8">
        <p>Task: {props.title}</p>
        <p>Difficulty: {props.difficulty}</p>
      </div>
    </div>
  );
};
export default Card;
