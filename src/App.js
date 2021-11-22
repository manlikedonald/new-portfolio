import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Urudi from './components/Urudi';
import ScrollToTop from './components/ScrollToTop';
import Voluum from './components/Voluum.jsx'
import Engage from './components/Engage.jsx'
                

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/urudi' component={Urudi} />
          <Route path='/voluum' component={Voluum} />
          <Route path='/engage' component={Engage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
