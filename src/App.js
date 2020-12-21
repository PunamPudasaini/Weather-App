import React, { Component } from 'react';
import './App.css';

import Weather from './weathercomponent/weather.component'

// class App extends Component {
//   state = {  }
//   render() { 
//     return ( 
//       <div className="App">
//      <Weather/>
//     </div>
//      );
//   }
// }
 
// export default App;


function App() {
  return (
    <div className="App">
     <Weather/>
    </div>
  );
}

export default App;
