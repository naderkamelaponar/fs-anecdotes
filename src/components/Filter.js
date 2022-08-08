// بسم الله الرحمن الرحيم
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'
const FilterAnec = (props)=>{ 
    const handleChange=(e)=>{
        props.filterChange(e.target.value)
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
export default connect(null,{filterChange})(FilterAnec) 