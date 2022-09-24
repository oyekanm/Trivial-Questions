import React, { useState } from "react";

const Good = ({ name, title, body }) => {
  return (
    <>
      <div>
        <h1>{name}</h1>
        <p>{title}</p>
        <p>{body}</p>
      </div>
    </>
  );
};

export default Good;
