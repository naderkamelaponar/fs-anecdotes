// بسم الله الرحمن الرحيم
import { newVote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { notification } from '../reducers/notificationReducer'
const ContenetList =()=>{
  const dispatch = useDispatch()
    const anecList= useSelector(({anecdotes,filter})=>{
      if (!filter) return anecdotes
      const newList = anecdotes.filter(a=>{
        return a.content.includes(filter) || a.content.match(filter)
       })
      return newList
    })
    const newList = [...anecList].sort((a,b)=>{
      return b.votes-a.votes
    })
    const vote = (anecdote) => {dispatch(newVote(anecdote.id))
    dispatch(notification(anecdote.content))} 
   return (<>
    {newList.map((anecdote,i) =>
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