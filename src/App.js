import React, {useState, useEffect} from "react";

import Title from './components/Title';
import Question from './components/Question'
import data from './components/data/Apprentice_TandemFor400_Data.json';

const App = () => {
  const [asked, setAsked] = useState([]);
  const [rand, setRand] = useState('')

  // picks random question to start
  useEffect(() => {
    const r = Math.floor(Math.random() * Math.floor(20))
    setRand(r)
  }, [])


  const answer = (id, chosen) => {
    console.log(chosen)
    setAsked([...asked, id])
  }

  // picks random new question, won't choose q already chosen
  const newQ = () => {
    let r = NaN
    while (asked.includes(r) || isNaN(r)) {
      if (asked.length === 21) {
        break
      }
      r = Math.floor(Math.random() * Math.floor(20));
    }
    setRand(r)
  }


  return (
    <div>
      <Title/>
      <div>
        {(asked.length !== 20) && rand !== '' ? <Question qObj={data[rand]} qNum={rand} ans={answer}/> : 'the end!'}
      </div>
      <input
        type='button'
        onClick={newQ}
        value='New Question'
      />
    </div>
  );
};

export default App;
