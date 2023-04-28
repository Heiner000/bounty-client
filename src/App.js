import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Home from "./components/pages/Home"
import BountyDetails from "./components/pages/BountyDetails"
import Header from "./components/partials/Header"
import NotFound from "./components/pages/NotFound"
  
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route
            path="/bounties/:id"
            element={<BountyDetails />}
          />
          <Route
            path="/*"
            element={<NotFound />}
          />
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
