// بسم الله الرحمن الرحيم
import {useSelector} from 'react-redux'
const Notification = () => {
  const notification = useSelector(a=>a.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return notification ?  <div style={style}> you have voted for <b>{notification} </b></div> : null 
}
export default Notification