import react from 'react'
import {useState} from 'react'
import Search from './Components/Search'
const App =() => {

  const [searchTerm, setSearchTerm] = useState('I am batman');
  return (
     <main>

      <div className="pattern"/>
      <div className="Wrapper">
        <header>
          <img src='./hero.png' alt='Hero Banner'/>
          <h1>
       Find <span className="text-gradient"> Movies </span>You Will Enjoy Without The Hassle
       </h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
       
      </div>
     </main>
  )
}
export default App