import React from "react";

import style from '../styles/Question.module.css';


const Question = ({question, options, correct, qNum, answered, setAnswered, ans, chosen, newQ}) => {

  return (
    <>
      <div className={style.question}>
        {question}
      </div>
      <form>
        {answered
        // if question answered return options with highlighting
        ? <>
            {options.map((option, i) => {
              if (option === correct) {
                return(
                  <div key={i} className={style.correct}>
                    {option}
                  </div>
                )
              } else if (option === chosen) {
                return(
                  <div key={i} className={style.incorrect}>
                    {option}
                  </div>
                )
              } else {
                return(
                  <div key={i}>
                    {option}
                  </div>
                );
              }
            })}
            <input
              type='button'
              onClick={()=>{newQ(qNum)}}
              value='Next Question'
            />
          </>
        // if question not answered return clickable options
        : options.map((option, i) => {
            return(
              <div
                key={i}
                className={style.option}
                onClick={() => {
                  ans(qNum, option)
                  setAnswered(true);
                }}
              >
                {option}
              </div>
            );
          })
      }
      </form>
    </>
  );
};

export default Question;
