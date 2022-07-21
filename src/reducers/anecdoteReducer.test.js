// بسم الله الرحمن الرحيم
import anecReducer from "./anecdoteReducer";
import deepFreeze from 'deep-freeze'
describe('anecdoteReducer',()=>{
    test ('return new vote value with action VOTE', ()=>{
       const state=[{content:'new content',id:1,votes:0}]
        const action = {
            type:'anecdotes/newVote',payload:1
        }
        deepFreeze(state)
        const newState= anecReducer(state,action)
        console.log(newState)
        expect(newState).toContainEqual({
            content:'new content',id:1,votes:1
        })
    })

    test ('create new anecodte when value with action NEW_ANEC', ()=>{
        const state=[{content:'new content',id:0,votes:0},{content:'new content 1',id:1,votes:0},{content:'new content 2',id:2,votes:0}]
         const action = {
             type:'anecdotes/newAnec',data:{
                 content:'new content 3',
                 id:3,votes:0
             }
         }
         deepFreeze(state)
         anecReducer(state,action)
         expect(state).toHaveLength(3)
     })
})