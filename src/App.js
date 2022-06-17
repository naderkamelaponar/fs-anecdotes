// بسم الله الرحمن الرحيم
import { useState } from 'react'
const getRandomInt =(max)=>{
  return Math.floor(Math.random() * max);
}
const Display = () => {
  
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [points, setPoint] = useState({})
  const [selected, setSelected] = useState(getRandomInt(anecdotes.length))
  const changeClick=()=>{
    setSelected(getRandomInt(anecdotes.length))
  }
  const voteClick=()=>{
    setPoint({...points, [selected]:points[selected]?points[selected]+1:1})

    console.log(points)
    
  }
  const votes= points[selected]?points[selected]:0
 
  
  return (
    <div>
      <h1>بسم الله الرحمن الرحيم</h1>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes} votes</p>
      <button onClick={changeClick}>Next anecdote</button>
      <button onClick={voteClick}>vote</button>
      <h2>Anecdote with the most votes</h2>
      
    </div>
  )
}

export default App