import React from "react";
import { Body, Header } from "./Components";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Protect from "./Components/Protect";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" index element={<Body />} />
        <Route path="/dashboard" element={
          <Protect>
            <Dashboard />
          </Protect>
        } />
      </Routes>
    </div>
  )
}
export default App