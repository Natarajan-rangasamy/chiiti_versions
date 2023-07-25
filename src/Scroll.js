import React, { useLayoutEffect } from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "500px",
        borderLeft: "none",
        borderBottom: "none",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
