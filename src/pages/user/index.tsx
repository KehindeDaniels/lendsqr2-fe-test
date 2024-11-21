// src/pages/Dashboard.tsx
import React from "react";
import UserList from "../../component/user-list";
// import UserSummary from "../components/userSummary/UserSummary";

const Dashboard: React.FC = () => {
  return (
    <div>
      {/* <UserSummary /> */}
      <UserList />
    </div>
  );
};

export default Dashboard;
