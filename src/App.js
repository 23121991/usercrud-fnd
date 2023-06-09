import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import UpdateUser from "./pages/UpdateUser";
import Navigation from "./pages/Navigation";

function App() {
  const [id, setId] = useState("")
  const getId = (id) => {
    setId(id);
  }
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home getId={getId} />} />
        <Route path="/createForm" element={<CreateUser />} />
        <Route path="/updateForm" element={<UpdateUser id={id} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
