// بسم الله الرحمن الرحيم
import ContenetList from './components/Contents'
import NewContent from './components/NewContent'
import FilterAnec from './components/Filter'
import Notification from './components/Notification'
const App = () => {

  return (
    <div>
      <h1> بسم الله الرحمن الرحيم</h1>
      <h2>Anecdotes fs-6.18</h2>
      <Notification />
   
      <FilterAnec /> <NewContent />
      <ContenetList />
      
     
    </div>
  )
}

export default App