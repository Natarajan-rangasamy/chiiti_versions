import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "700px",
        borderLeft: "none",
        borderBottom: "none",
        marginTop: "25px"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
