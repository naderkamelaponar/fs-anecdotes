// بسم الله الرحمن الرحيم
import axios from 'axios'
import appConfig from '../config'
const baseUrl = appConfig.baseUrl +'anecdotes/'
const getAll =async()=>{
    const response = await axios.get(baseUrl)
    if (response.data)return response.data
   

}
const newAnec = async(content)=>{
    const contentLength = await getAll()
    const anecdote = {content,id:contentLength.length+1,votes:0}
    const response = await axios.post(baseUrl,anecdote)
    return response.data
}
const voteToAnec = async(id)=>{
    let anecToVote = await axios.get(baseUrl+id)
    if (anecToVote.data) anecToVote=anecToVote.data
    else return {"error" :"not found"}
    anecToVote= {...anecToVote,votes:anecToVote.votes+1}
    const response = await axios.patch(baseUrl+id,anecToVote)
    return response.data
}
const contentServices={
    getAll,newAnec,voteToAnec
}
export default contentServices