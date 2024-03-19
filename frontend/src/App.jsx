import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import All from "./components/All.jsx";
import Header from "./components/Header/Header.jsx";
import AddRoutesMa from "./Routes/AddRoutesMa.jsx";

import Loginadm from "./pages/Loginadm/Loginadm.jsx";
import AddRoutesAddMa from "./Routes/AddRoutesAddMa.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/loginadm" element={<Loginadm />} />
          {AddRoutesMa()}
          {AddRoutesAddMa()}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
