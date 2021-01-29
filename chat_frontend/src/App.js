
import './App.scss';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './components/auth/Login';
import Chat from './components/chat/Chat';
import Register from './components/auth/Register';
function App() {
  return (
     <Router>
       <div className="App">
       <Switch>
         <Route exact path='/' component={Chat}/>
         <Route path='/login' component={Login}/>
         <Route path='/register' component={Register}/>
         <Route render={() => <h1>Page not found</h1>}/>
       </Switch>
       </div>
     </Router>
  );
}

export default App;
