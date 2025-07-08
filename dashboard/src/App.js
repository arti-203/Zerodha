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
//2nd code
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
// import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import DashboardHome from "./components/DashboardHome";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/login" component={Login} />
//         <Route path="/signup" component={Signup} />
//         <Route path="/dashboard" component={DashboardHome} />
//       </Switch>
//     </BrowserRouter>
//   );
// };

// export default App;

