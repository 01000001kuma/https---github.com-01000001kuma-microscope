import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Tiles } from "./pages/Tiles";
import './App.css';

function App() {
  return (

      <Router>
          <div className={styles.App}>
              <Routes>
                  
                  <Route path="/" element={<Home />} />
                  <Route path="/tiles" element={<Tiles />} />
                  
              </Routes>
          </div>
      </Router>
  );
}

export default App;
