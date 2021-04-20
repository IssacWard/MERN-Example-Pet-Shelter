import { Router } from '@reach/router';

import Main from './views/Main'
import PetAll from './views/PetAll'
import PetNew from './views/PetNew'
import PetDetails from './views/PetDetails'
import PetUpdate from './views/PetUpdate'
import About from './views/About'
import Contact from './views/Contact'
import Donate from './views/Donate'

import Header from './components/Header';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  return (
    <div id="MainBack" class="container">
      <Header />
          <Router>
              <Main path="/"/>
              <PetAll path="/pets/all"/>
              <PetDetails path="/pets/:id"/>
              <PetNew path="/pets/new"/>
              <PetUpdate path="/pets/:id/edit"/>

              <About path="/about"/>
              <Contact path="/contact"/>
              <Donate path="/donate"/>
          </Router>
      <Footer />
    </div>
  );
}

export default App;
