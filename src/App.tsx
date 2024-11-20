import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/login-page";
import Layout from "./Component/layout";
import Users from "./Pages/users";
import UserDetails from "./Pages/user-details";
import NotFound from "./Pages/not-found";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="user" element={<Layout />}>
          <Route index element={<Users />} />
          <Route path="user/:userId" element={<UserDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
