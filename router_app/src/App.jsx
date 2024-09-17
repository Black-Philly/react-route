import './App.css'
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home';
import Services from './pages/Services';
import Contacts from './pages/Contacts';


function App() {
  

  return (
    <>
    <Header/>
      <main>
        <Routes>

          <Route path='/' element={ <Home/>} />
          <Route path='/services' element={ <Services/>} />
          <Route path='/contacts' element={ <Contacts/>} />

        </Routes>
      </main>
    <Footer/>
    </>
  );
}

export default App
