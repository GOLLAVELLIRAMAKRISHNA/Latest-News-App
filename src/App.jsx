import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Newarea from './components/Newarea/Newarea'

const App = () => {

  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Newarea category={category} />
    </div>
  )
}

export default App;