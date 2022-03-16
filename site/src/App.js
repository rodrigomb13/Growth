import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
//import Usuarios from './components/pages/Usuarios';
import Company from './components/pages/Company';

import Container from './components/layout/Container';
import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Person from './components/consume/Person';


function App() {

  return (
    
    <Router>
      <NavBar/>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company/>} />
            <Route path="/person" element={<Person />} />
          </Routes>
        </Container>  
      <Footer/>
    </Router>
  );
}

export default App;
