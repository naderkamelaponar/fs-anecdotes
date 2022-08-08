// بسم الله الرحمن الرحيم
const notifyReducer  = (state =null, action)=>{
    switch(action.type){
        case 'NOTIFY': return action.data
        case 'STOP': return null
        default : return state
    }
}
const setNotifyMsg = (msg)=>{
    return {type:'NOTIFY',data:msg}
}
const clearNotify =()=>{
    return {type:'STOP'}
}
const notification =(msg,seconds = 5)=>{
    return dispatch=>{
        dispatch(setNotifyMsg(msg))
        setTimeout(()=>{
        dispatch(clearNotify())
        },seconds * 1000)}
}
export {notification}
export default notifyReducer