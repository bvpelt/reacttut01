import React from 'react';

class App01 extends React.Component {
   render() {

   	  var i = 1;
	  var myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }
      return (
         <div>
             <h1>Header</h1>
             <h2>Content</h2>
             <p>This is the content!!!</p>
             <p data-myattribute = "somevalue">This is the content with myattribute!!!</p>
             Hello World!!!
             <h1>{1+1}</h1>
             <h1>{i == 1 ? 'True!' : 'False'}</h1>
             <h1 style = {myStyle}>Header</h1>

         </div>
      );
   }
}

export default App01;