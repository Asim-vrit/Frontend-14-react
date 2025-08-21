import React from "react";

function Sum(props) {
  console.log("props", props);
  return (
    <div
      style={{
        margin: 10,
        color: "white",
        padding: 5,
        backgroundColor: "rebeccapurple",
      }}
    >
      {props.a} + {props.b} = {props.a + props.b}
    </div>
  );
}

export default Sum;
