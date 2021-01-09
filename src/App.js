
import './App.css';
import { Component } from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Game from './components/game/game'
import Nav from './components/Navbar/Navbar'
import Login from './components/auth/Login'
class App extends Component{
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route path="/game" component={Game}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}
}
export default App;
