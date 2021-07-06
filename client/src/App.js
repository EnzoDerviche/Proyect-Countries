import './App.css';
import { Route } from "react-router-dom";
import Landing from './components/landing/landing';
import Countries from './components/countries/countries';
import Details from './components/countryDetails/details';
import Activity from './components/activities/activity';

function App() {


  return (
    <div className="App">
      <Route exact path='/'
        render={()=> <Landing />}
      />
      <Route exact path="/countries"
      render={() => <Countries />}
      />
      <Route exact path="/details/:id"
      render={() => <Details />}
      />
      <Route exact path="/activities"
      render={() => <Activity />}
      />
    </div>
  );
}

export default App;
