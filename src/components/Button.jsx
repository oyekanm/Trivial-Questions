import React, { useState, useEffect } from "react";
import BtnChild from "./BtnChild";
import { nanoid } from "nanoid";

function Button({ incorrect_answers, correct_answer }) {
  const [newButton, setNewButton] = useState([]);

  function generateNewButton() {
    const btnIndex = Math.floor(Math.random() * 4);
    const button = [...incorrect_answers];
    if (btnIndex === 3) {
      button.push(correct_answer);
    } else {
      button.push(button[btnIndex]);
      button[btnIndex] = correct_answer;
    }
    const buttonArr = button.map((btn) => {
      return {
        id: nanoid(),
        value: btn,
        isheld: false,
      };
    });
    setNewButton(buttonArr);
  }

  useEffect(() => {
    generateNewButton();
  }, []);

  const handleClick = (e, id) => {
    const event = e.target;

    setNewButton((prevButton) => {
      return prevButton.map((btn) => {
        return btn.id === id ? { ...btn, isheld: !btn.isheld } : btn;
      });
    });
  };
  return (
    <>
      {newButton.map((btn) => {
        const { value, id } = btn;
        return value ? (
          <BtnChild key={id} {...btn} handleClick={handleClick} />
        ) : null;
      })}
    </>
  );
}

export default Button;
