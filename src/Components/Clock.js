import React from "react";
  
export default function Clock(props) {

    const styles = {
        color: props.isActive ? "#71ba61" : "black",
    }

  return (
    <div className="timer">
      <span className="digits" style={styles}>
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits" style={styles}>
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
      </span>
    </div>
  );
}