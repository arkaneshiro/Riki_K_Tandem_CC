import React, {useState, useEffect} from "react";

import Title from './components/Title';
import Question from './components/Question'
import data from './components/data/Apprentice_TandemFor400_Data.json';


// array shuffling function I found on stack overflow
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


const App = () => {
  const [asked, setAsked] = useState([]);
  const [rand, setRand] = useState('')
  const [score, setScore] = useState(0)
  const [options, setOptions] = useState([])
  const [answered, setAnswered] = useState(false)
  const [chosen, setChosen] = useState('')

  // picks random question to start
  useEffect(() => {
    const r = Math.floor(Math.random() * Math.floor(20))
    setRand(r)
    setOptions(shuffle([...data[r].incorrect, data[r].correct]))
  }, [])

  // updates score and chosen state
  const answer = (id, chosen) => {
    const ans = data[id].correct
    if (ans === chosen) {
      setScore(score + 1)
    }
    setChosen(chosen)
    setAsked([...asked, id])
  }

  // picks random question until it picks one not yet asked
  const newQ = id => {
    let r = NaN
    while (true) {
      r = Math.floor(Math.random() * Math.floor(20));
      if (!asked.includes(r)) {
        break
      }
    }
    setRand(r)
    setOptions(shuffle([...data[r].incorrect, data[r].correct]))
    if (asked.length === 11) {
      setAsked([...asked, 22])
    }
    setAnswered(false)
    setChosen('')
  }


  return (
    <div>
      <Title/>
      <div>
        {(asked.length !== 0 && asked.length !== 12 && rand !== '')
        ? <Question
            question={data[rand].question}
            options={options}
            correct={data[rand].correct}
            qNum={rand}
            answered={answered}
            setAnswered={setAnswered}
            ans={answer}
            chosen={chosen}
            newQ={newQ}
          />
        : ''
        }
        {(asked.length === 0)
        ? <input
            type='button'
            value='start?'
            onClick={() => {setAsked([22])}}
          />
        : ''
        }
        {(asked.length === 12)
        ? <>
            <div>
              score for round 1: {score}/10
            </div>
            <input
              type='button'
              value='another round?'
              onClick={() => {
                setAsked([22]);
                setScore(0);
                setChosen('');
                setAnswered(false);
              }}
            />
          </>
        : ''
        }
      </div>
    </div>
  );
};

export default App;
