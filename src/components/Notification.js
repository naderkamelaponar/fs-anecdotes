// بسم الله الرحمن الرحيم
import {connect} from 'react-redux'
const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return props.notification ? <div> <strong style={style}> {props.notification} </strong> </div>: null 
}
const mapStateToProps =(state)=>{
  return {notification:state.notification}
}
export default connect(mapStateToProps,null)(Notification)