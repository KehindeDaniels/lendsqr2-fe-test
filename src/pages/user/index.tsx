// src/pages/Dashboard.tsx
import React from "react";
import UserList from "../../component/user-list";
import UserSummary from "../../component/dashboard-summary";

const Dashboard: React.FC = () => {
  return (
    <div>
      <UserSummary />
      <UserList />
    </div>
  );
};

export default Dashboard;
