// بسم الله الرحمن الرحيم
import { connect } from 'react-redux'
import {createAnec} from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'
const NewContent = (props)=>{
    
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const content= e.target.anecContent.value
        if (!content) {
          props.notification('input anecdote content',5)
          return
        }
        props.createAnec(content)
        props.notification(`you have added ${content} to list`)
        e.target.anecContent.value=''
      }
    return (
        <>
        <h3>create new</h3>
        <form onSubmit={handleSubmit}>
          <input name='anecContent'/>
          <button type="submit">create</button>
        </form>
        </>
    )
}

export default connect(null,{createAnec,notification})(NewContent)