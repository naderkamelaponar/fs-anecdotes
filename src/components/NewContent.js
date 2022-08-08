// بسم الله الرحمن الرحيم
import { useDispatch } from 'react-redux'
import { newAnec } from '../reducers/anecdoteReducer'
import contentServices from '../services/contents'
const NewContent = ()=>{
    const dispatch = useDispatch()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const content= e.target.anecContent.value
        if (!content) return 
        const newContent = await contentServices.newAnec(content)
        dispatch(newAnec(newContent))
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