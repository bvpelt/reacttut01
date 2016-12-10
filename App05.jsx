import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
   constructor() {
      super();

	  this.statenr=1;
      this.state = {
         data: []
      }
      this.myColor = ['green', 'red', 'blue', 'cyan', 'orange', 'yellow'];
      this.mySelColor= 'green';

      this.setStateHandler = this.setStateHandler.bind(this);
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);

   };

   setStateHandler() {
      var item = "setState..." + this.statenr++;
      var myArray = this.state.data;
      myArray.push(item)
      this.setState({data: myArray})
   };

   forceUpdateHandler() {
      this.forceUpdate();
   };

    findDomNodeHandler() {
         var myDiv = document.getElementById('myDiv');
	     this.mySelColor = this.myColor[Math.floor(Math.random()*this.myColor.length)];
         ReactDOM.findDOMNode(myDiv).style.color = this.mySelColor;
         this.forceUpdate();
    };

   render() {
      return (
         <div>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
            <br/>
            <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {Math.floor(Math.random()*10)}</h4>
            <br/>
            <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
            <div id = "myDiv">NODE {this.mySelColor}</div>
         </div>
      );
   }
}

export default App;