
import './App.css';
import { Component } from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Game from './components/game/game'
import Nav from './components/Navbar/Navbar'
import Login from './components/auth/Login'
import Result from './components/Result/Result'
import Register from './components/auth/Register'
class App extends Component{
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route path="/game" component={Game}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/result" component={Result}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}
}
export default App;
