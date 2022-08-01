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
let timeOut 
const notification =(msg,ms = 5)=>{
    return dispatch=>{
        clearTimeout(timeOut)
        dispatch(setNotifyMsg(msg))
        timeOut = setTimeout(()=>{
            dispatch(clearNotify())
        },ms*1000)
        
        
    }
}
export {notification}
export default notifyReducer