import './App.css';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/login';
import Register from './components/register/register';
import Overview from './insiders/overview/overview';
import Prescriptions from './insiders/Prescriptions/Prescriptions';
import Reports from './insiders/reports/Reports';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/dashboard/overview' exact component={Overview}/>
        <Route path='/dashboard/prescriptions' exact component={Prescriptions}/>
        <Route path='/dashboard/reports' exact component={Reports}/>
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
