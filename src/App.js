
import './App.css';
import { Component } from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Form from './components/game/form'
import Nav from './components/game/Navbar'
class App extends Component{
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route path="/" component={Form}></Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}
}
export default App;
