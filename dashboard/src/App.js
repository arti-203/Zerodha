// App.js
// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       {/* Your app content */}
//     </div>
//   );
// }

// export default App; 
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Switch>
      <Route path="/*" component={Home} />
    </Switch>
  );
}

export default App;