import "./App.css";
import { Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import Countries from "./components/countries/countries";
import Details from "./components/countryDetails/details";
import Activity from "./components/activities/activity";
import AddActivities from "./components/addactivities/addActivity";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/countries" render={() => <Countries />} />
      <Route exact path="/country/:id" render={() => <Details />} />
      <Route exact path="/activity/add/:id" render={() => <Activity />} />
      <Route exact path="/add/activities" render={() => <AddActivities />} />
    </div>
  );
}

export default App;
