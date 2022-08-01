// بسم الله الرحمن الرحيم

import {  connect } from 'react-redux'
import { notification } from '../reducers/notificationReducer'
import {voteToAnec} from '../reducers/anecdoteReducer'
const Content = ({anecdote,handleVote})=>{
        return (
          <div >
          <p>
            {anecdote.content} has <b>{anecdote.votes}</b> votes
          </p>
          <button onClick={handleVote}>vote</button>
        </div>
        )
}
const ContenetList =(props)=>{
  const handleVote=(anec)=>{
      props.voteToAnec(anec.id)
      props.notification(`You Have Voted for ${anec.content} `,7)
  }
    return (
      <>
      {props.anecdotes.map((anec,i)=>{
       return <Content key={i} anecdote={anec} handleVote={()=>{handleVote(anec)}} />
      })}
      </>
    )
}
const mapStateToProps =(state)=>{
  let res = state.filter?state.anecdotes.filter(a=>{return a.content.includes(state.filter)}):state.anecdotes
  return {anecdotes:res}
}
const mapDispatchToProps={notification,voteToAnec}
const connectedAnecs = connect(mapStateToProps,mapDispatchToProps)(ContenetList)
export default connectedAnecs
