// بسم الله الرحمن الرحيم
import { createSlice } from '@reduxjs/toolkit'
import contentServices from '../services/contents'
const initialState = []
const anecSlice = createSlice({
  name:'anecdotes',
  initialState,
  reducers:{
    newAnec (state,action){
      state.push(action.payload)
    },
    newVote (state,action){
     
      const id =  action.payload.id
      const getContent= state.find(n=>n.id === id)
      const newContent = {
        ...getContent , votes:getContent.votes+1
      }
      return state.map(n=> n.id === id ? newContent: n).sort((a,b)=>{
      return b.votes-a.votes})
    },
    appndAnec(state,action){
     state.push(action.payload) 
    },
    setAnec(state,action){
      return action.payload
    }
  }

})
export const { setAnec,newAnec,newVote,appndAnec} =  anecSlice.actions
export const initializeAnecs = ()=>{
  return async dispatch=>{
    const aneces = await contentServices.getAll()
    dispatch(setAnec(aneces))
  }
}
export const voteToAnec = (id)=>{
  return async dispatch =>{
    const res= await contentServices.voteToAnec(id)
    dispatch(newVote(res))
  }
}

export {initialState}
export default anecSlice.reducer