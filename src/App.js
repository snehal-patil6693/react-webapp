import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Subscribe from './components/pages/Subscribe';
import Hluas from './components/pages/Hluas';
import Diversity from './components/pages/Diversity';
import Home from './components/pages/Home';


function App() {
  return (
    <>
     <Router>
     <Navbar/>
     <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/hluas' element={<Hluas/>} />
          <Route path='/diversity' element={<Diversity/>} />
          <Route path='/subscribe' element={<Subscribe/>} />
        </Routes>
     
     <Footer/> 
     </Router>
    </>
  );
}

export default App;
