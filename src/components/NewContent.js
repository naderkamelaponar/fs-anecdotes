// بسم الله الرحمن الرحيم
import { useDispatch } from 'react-redux'
import { newAnec } from '../reducers/anecdoteReducer'
const NewContent = ()=>{
    const dispatch = useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const content= e.target.anecContent.value
        if (!content) return 
        dispatch(newAnec(content))
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
export default NewContent