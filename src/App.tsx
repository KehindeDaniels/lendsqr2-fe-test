import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context";
import Login from "./pages/login-page";
import Layout from "./component/layout";
import Users from "./pages/users";
import UserDetails from "./pages/user-details";
import NotFound from "./pages/not-found";
const App: React.FC = () => {
  return (
    <UserProvider>
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
    </UserProvider>
  );
};

export default App;
