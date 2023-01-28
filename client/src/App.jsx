import React from "react";
import {
  Home,
  Login,
  Register,
  CreateBlog,
  NewsFeed,
  MyBlogs,
  Settings,
} from "./pages";
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
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/newsfeed" element={<NewsFeed />} />
          <Route path="/myblogs" element={<MyBlogs />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
