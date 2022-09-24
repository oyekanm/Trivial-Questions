import React from "react";

function Start({
  start,
  amount,
  type,
  level,
  handleChange,
  handleLevel,
  handleType,
  error,
  handleSubmit,
}) {
  return (
    <>
      {start && (
        <div className="Start__page">
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="questions">how many question ? </label>
            <input
              type="number"
              id="questions"
              min={5}
              max={50}
              name="amount"
              value={amount}
              onChange={handleChange}
            />
            <label htmlFor="category">choose a category :</label>
            <select
              name="type"
              id="category"
              value={type}
              onChange={handleType}
            >
              <option value="generalKnowledge">general knowledge</option>
              <option value="film">film</option>
              <option value="music">music</option>
              <option value="sports">sports</option>
              <option value="politics">politics</option>
              <option value="history">history</option>
              <option value="celebrity">celebrity</option>
              <option value="animal">animal</option>
            </select>
            <label htmlFor="difficulty">select a difficulty</label>
            <select
              name="level"
              id="difficulty"
              value={level}
              onChange={handleLevel}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </form>
          {error && (
            <p className="error">
              can't generate questions, please try different options
            </p>
          )}
          <button className="Game__link" onClick={handleSubmit}>
            Start quiz
          </button>
        </div>
      )}
    </>
  );
}

export default Start;
