// بسم الله الرحمن الرحيم
import { voteToAnec } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { notification } from '../reducers/notificationReducer'
import { useEffect } from 'react'
import { initializeAnecs } from '../reducers/anecdoteReducer'
const ContenetList =()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(initializeAnecs())
  },[dispatch])
    const anecList= useSelector(({anecdotes,filter})=>{
      if (!filter) return anecdotes
      const newList = anecdotes.filter(a=>{
        return a.content.includes(filter) || a.content.match(filter)
       })
      return newList
    })
    const vote = (anecdote) => {dispatch(voteToAnec(anecdote.id))
    dispatch(notification(anecdote.content,10))} 
   return (<>
    {anecList.map((anecdote,i) =>
        <div key={i}>
          <p>
            {anecdote.content} has <b>{anecdote.votes}</b> votes
          </p>
          <button onClick={() => vote(anecdote)}>vote</button>
          </div>
      )}
   </>)
}
export default ContenetList