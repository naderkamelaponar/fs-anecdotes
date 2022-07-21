// بسم الله الرحمن الرحيم
const filterReducer  = (state ='', action)=>{
    switch(action.type){
        case 'FILTER': return action.filter
        default : return state
    }
}
const filterChange =(filter)=>{
    return {type:'FILTER',filter}
}
export {filterChange}
export default filterReducer