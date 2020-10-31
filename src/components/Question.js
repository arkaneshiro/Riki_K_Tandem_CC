import React from "react";

import style from '../styles/Question.module.css';


const Question = ({question, options, correct, qNum, answered, setAnswered, ans, chosen, newQ}) => {

  return (
    <div className={style.box}>
      <div className={style.question}>
        {question}
      </div>
        {answered
        // if question answered return options with highlighting
        ? <form
            className={style.form}
            onSubmit={()=>{newQ(qNum)}}
          >
            {options.map((option, i) => {
              if (option === correct) {
                return(
                  <div key={i} className={`${style.correct} ${style.option}`}>
                    {option}
                  </div>
                )
              } else if (option === chosen) {
                return(
                  <div key={i} className={`${style.incorrect} ${style.option}`}>
                    {option}
                  </div>
                )
              } else {
                return(
                  <div className={style.option} key={i}>
                    {option}
                  </div>
                );
              }
            })}
            <input
              className={style.submitButton}
              type='submit'
              value='Next Question'
            />
          </form>
        // if question not answered return clickable options
        : options.map((option, i) => {
            return(
              <div
                key={i}
                className={`${style.optionClickable} ${style.option}`}
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
    </div>
  );
};

export default Question;
