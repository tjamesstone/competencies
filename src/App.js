import React, {Component} from 'react';
import './App.css'; 
import routes from './routes'


class App extends Component {

  

  render(){
  return (
    <div className="App">
     App
     <input className='disabled' type="text" name="" id="" disabled/>
     {routes}
    </div>
  )}
}

export default App;
