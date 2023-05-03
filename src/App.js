
import './App.css';
import { GeneralProvider } from './GeneralContext';
import Annonces from './Pages/Annonces/Annonces';
import Home from './Pages/Home';
import Signup from './Pages/Signup/Signup';
import Companies from './components/Companies/Companies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Res from './components/Residences/Res';

import { Value } from './components/Value/Value';
import Login from 'C:/Users/jok02/Desktop/pfa/immovff/src/Pages/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <GeneralProvider>
        <Routes>
            <Route path='/login' exact element={<Login />}></Route> 
            <Route path='/signup' exact element={<Signup />}></Route> 
            <Route path='/value' exact element={<Value />}></Route>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/Home' exact element={<Hero />}></Route>
            <Route path='/contact' exact element={<Contact />}></Route>
            <Route path='/annonce' exact element={<Annonces />}></Route>

          </Routes>
          
        </GeneralProvider>
      </Router>
    </>
  );
}

export default App;
