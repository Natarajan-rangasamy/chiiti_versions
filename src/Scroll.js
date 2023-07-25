import React, { useLayoutEffect } from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "100%",
        borderLeft: "none",
        borderBottom: "none",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
