import React from 'react';

class App02 extends React.Component {
   render() {

   	  var i = 1;
	  var myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }
      return (
         <div>
              <Header/>
              <Content/>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Extended Header</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Extended Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}
export default App02;