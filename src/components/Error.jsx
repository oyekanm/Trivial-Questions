import React from "react";

function Error({ errorMessage }) {
  return (
    <div>
      <p className="error">{errorMessage}</p>
      <p className="error">
        {" "}
        Unable to fetch Questions at the moment. Please try again.
      </p>
    </div>
  );
}

export default Error;
