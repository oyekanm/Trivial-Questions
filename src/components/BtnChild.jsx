import React from "react";

function BtnChild({ value, id, handleClick, isheld }) {
  return (
    <button
      onClick={(e) => handleClick(e, id)}
      className={isheld ? "Question__button blue" : "Question__button "}
    >
      {value}
    </button>
  );
}

export default BtnChild;
