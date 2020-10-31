import React, {useEffect} from "react";

import style from '../styles/Question.module.css';

const Question = ({qObj, qNum, ans}) => {
  const options = qObj.incorrect.slice()
  options.push(qObj.correct)

  // randomizes order of options
  useEffect(() => {
    let num = Math.floor(Math.random() * Math.floor(8))
    while (num) {
      options.push(options.shift())
      if (num%2 === 0) {
        options.splice(2, 0, options.shift())
      }
      num --;
    };
  }, [options])

  const hover = e => {
    if (!e.target.className.includes(style.hover)) {
      e.target.classList.add(style.hover)
    } else {
      e.target.classList.remove(style.hover)
    }
  }

  return (
    <>
      <div className={style.question}>
        {qObj.question}
      </div>
      <form>
        {options.map((option, i) => {
          return(
            <div
              key={i}
              onClick={() => {
                ans(qNum, option);
              }}
              onMouseOver={hover}
              onMouseLeave={hover}
            >
              {option}
            </div>
          );
        })}
      </form>
    </>
  );
};

export default Question;
