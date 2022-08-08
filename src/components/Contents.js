// بسم الله الرحمن الرحيم
import { newVote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
const ContenetList =()=>{
    const anecList = useSelector(s => s.sort((a,b)=>{return b.votes-a.votes}))
    const dispatch = useDispatch()
    const vote = (id) => {dispatch(newVote(id))}    
   return (<>
    {anecList.map((anecdote,i) =>
        <div key={i}>
          <p>
            {anecdote.content} has {anecdote.votes}
          </p>
          <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
      )}
   </>)
}
export default ContenetList