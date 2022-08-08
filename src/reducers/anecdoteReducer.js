// بسم الله الرحمن الرحيم
//import { createSlice } from '@reduxjs/toolkit'
import contentServices from '../services/contents'
const anecReducer = (state=[],action)=>{
switch (action.type){
  case 'ALL':
    return action.data.sort((a,b)=>{return b.votes-a.votes})
  case 'NEW':
    return [...state,action.data]
  case 'VOTE':
    const id =  action.data.id
    const getContent= state.find(n=>n.id === id)
    const newContent = {
      ...getContent , votes:getContent.votes+1
    }
    return state.map(n=> n.id === id ? newContent: n)
    .sort((a,b)=>{return b.votes-a.votes})
  default: return state
}
}

const initializeAnecs = ()=>{
  return async dispatch=>{
    const res = await contentServices.getAll()
    dispatch({type:'ALL',data:res})
  }
}
const voteToAnec = (id)=>{
  return async dispatch =>{
    const res= await contentServices.voteToAnec(id)
    dispatch({type:'VOTE',data:res})
  }
}
const createAnec=(anec)=>{
  return async dispatch =>{
    const res= await contentServices.newAnec(anec)
    dispatch({type:'NEW',data:res})
  }
}
export  {createAnec,voteToAnec,initializeAnecs}


export default anecReducer