import React from "react";
import { Home, Login, Register } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider from "./components/UserContext";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
