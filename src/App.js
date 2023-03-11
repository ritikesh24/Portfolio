import './App.css'
import { Contact } from './Components/Contact/Contact'
import { About } from './Components/SelfInfo/About'
import { Experience } from './Components/Experience/Experience'
import { Footer } from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { Nav } from './Components/Nav/Nav'
import { Portfolio } from './Components/Portfolio/Portfolio'
import { Services } from './Components/Services/Services'

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
