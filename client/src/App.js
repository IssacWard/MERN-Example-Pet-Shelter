
import { Router } from '@reach/router';

import Main from './views/Main'
import PetNew from './views/PetNew'
import PetDetails from './views/PetDetails'
import PetUpdate from './views/PetUpdate'


function App() {

  return (
    <div>
      <Router>
        <Main path="/"/>
        <PetDetails path="/pets/:id"/>
        <PetNew path="/pets/new"/>
        <PetUpdate path="pets/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
