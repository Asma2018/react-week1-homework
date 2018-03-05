import React from 'react';
import { render } from 'react-dom';

function App() {
  return (
    <div>
      <h1>Todo List</h1>
    </div>
  );
}

class App2 extends React.Component {
  constructor(){
    super();
    this.date ="Wed Sep 13 2017"
    this.date2 = " Sep 14 2017"
    this.date3 = "Fri Sep 15 2017"
  }
  render() {
    return(
      <div>
        <h1>GetUp from bed ,{this.date}</h1>
        <h1>Bruch your teeth ,{this.date2}</h1>
        <h1>Eat Breakfast,{this.date3}</h1>
        
    
      </div>
    );
  }

}

render(
  <div>
    <App /> 
    <App2/>
  </div>,
  document.getElementById('root'));
