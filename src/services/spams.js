// بسم الله الرحمن الرحيم
// بسم الله الرحمن الرحيم
import axios from 'axios'

import appConfig from '../config'
import spammers from './spammers';
const isSpam = (author)=>{
return spammers.includes(author) 
// return true if author is spam OR  false if author is not
}

const baseUrl = appConfig.baseUrl +'anecdotes'
const getAllSpams =async()=>{
    const response = await axios.get(baseUrl)
    if (response.data){
    
  const xd = response.data.map((d)=>{
            if(! isSpam(d.author))  return d  
                 const newD ={...d,"json":{}}
                 console.log('spam',newD)
                 return newD
        })
        console.log('xs',xd)
    }
   

}




const newAnec = async(content)=>{
    const aL = await getAll()
    const anecdote = {content,id:aL.length+1,votes:0}
    const response = await axios.post(baseUrl,anecdote)
    return response.data
}
const contentServices={
    getAll,newAnec
}
export default contentServices
