import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login-page";
import Layout from "./component/layout";
import Users from "./pages/users";
import UserDetails from "./pages/user-details";
import NotFound from "./pages/not-found";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="user" element={<Layout />}>
          <Route index element={<Users />} />
          <Route path=":userId" element={<UserDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
