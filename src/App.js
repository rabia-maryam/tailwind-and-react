import Navbar from './navbar';
import Login from './login';
import Contact from './Contact';
import Services from './Services';
import "./style.css";
import State from './state';
import Example from './Hero';
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';

export function App() {
  return(
    <>
    <Router>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Example/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/state' element={<State/>}/>
        <Route path='*' element={<h1>Page Not Found</h1>}/>
      </Routes>
    </Router>
  </>
  );
}