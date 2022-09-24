import React, { useContext, useReducer } from "react";
import { AppContext } from "../App";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1, isCount: state.isCount };
    case "Flip":
      return { count: state.count, isCount: !state.isCount };
    default:
      return state;
  }
};

const myState = {
  count: 0,
  isCount: true,
};
function Hooks() {
  const [state, dispatch] = useReducer(reducer, myState);
  const { load, setLoad } = useContext(AppContext);

  const handleIncrement = () => {
    dispatch({ type: "Increment" });
    dispatch({ type: "Flip" });
    setLoad(!load);
  };
  return (
    <div className="container">
      <p className="count">{state.count}</p>
      <button className="btn" onClick={handleIncrement}>
        Increment
      </button>
      {state.isCount && <p className="info">{state.count} is the value</p>}
    </div>
  );
}

export default Hooks;
