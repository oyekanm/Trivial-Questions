import React, { useReducer, useEffect } from "react";

import Start from "./components/Start";
import Questions from "./components/Questions";
import { reducer } from "./components/reducer";
import Error from "./components/Error";

const initialState = {
  questions: [],
  start: true,
  amount: 10,
  type: "generalKnowledge",
  level: "easy",
  error: false,
  show: false,
  isheld: false,
  errorMessage: "",
};

const category = {
  generalKnowledge: 9,
  film: 10,
  music: 11,
  sports: 20,
  politics: 23,
  history: 22,
  celebrity: 25,
  animal: 26,
};
const difficulty = { easy: "easy", medium: "medium", hard: "hard" };

const url = "";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, amount, type, level, start, error, errorMessage } = state;

  const fetchQuestion = async (url) => {
    try {
      dispatch({ type: "SETERROR" });
      const res = await fetch(url);
      const data = await res.json();
      if (data.results.length > 1) {
        dispatch({ type: "QUESTIONS", payload: data.results });
      } else {
        dispatch({ type: "RESETERROR" });
        throw new Error(
          "Unable to fetch Questions at the moment. Please try again"
        );
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuestion(url);
  }, []);

  const handleChange = (e) => {
    dispatch({ type: "AMOUNT", payload: e.target.value });
  };
  const handleLevel = (e) => {
    dispatch({ type: "LEVEL", payload: e.target.value });
  };
  const handleType = (e) => {
    dispatch({ type: "TYPE", payload: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "START" });
    dispatch({ type: "RESETSHOW" });

    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category[type]}&difficulty=${difficulty[level]}`;
    fetchQuestion(url);
  };
  const handleNewPage = () => {
    dispatch({ type: "SHOW" });
  };
  const handlePage = () => {
    dispatch({ type: "RESETQUESTION" });
    dispatch({ type: "RESETSHOW" });
  };

  if (start) {
    return (
      <main className="Start">
        <Start
          {...state}
          handleChange={handleChange}
          handleLevel={handleLevel}
          handleType={handleType}
          handleSubmit={handleSubmit}
        />
      </main>
    );
  }
  if (error) {
    <main className="Start">
      <Error errorMessage={errorMessage} />
    </main>;
  }
  return (
    <>
      <main className="Start">
        <Questions
          questions={questions}
          {...state}
          dispatch={dispatch}
          handleNewPage={handleNewPage}
          handlePage={handlePage}
        />
      </main>
    </>
  );
}

export default App;
