// بسم الله الرحمن الرحيم
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {initializeAnecs} from './reducers/anecdoteReducer'
import ContenetList from './components/Contents'
import NewContent from './components/NewContent'
import FilterAnec from './components/Filter'
import Notification from './components/Notification'
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecs())
  }, [dispatch])
  return (
    <div>
      <h1> بسم الله الرحمن الرحيم</h1>
      <h2>Anecdotes fs-6.21</h2>
      <Notification />
   
      <FilterAnec /> <NewContent />
      <ContenetList />
      
     
    </div>
  )
}

export default App