// بسم الله الرحمن الرحيم
import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'
const FilterAnec = ()=>{
    const dispatch = useDispatch()
    const handleChange=(e)=>{
        dispatch(filterChange(e.target.value))
    }
    const style = {
        marginBottom: 10
      }
    return (
        <p style={style}>
            filter : <input name='anecFilter' onChange={handleChange} />
        </p>
    )
}
export default FilterAnec