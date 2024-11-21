import React, { useEffect, useState } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import { useUsers } from "../../context/"; // Make sure the path matches
import UserDetailsSummary from "../../component/all-user-details/user-overview";
import UserDetailNav from "../../component/all-user-details/detail-navigation";
import UserDetailInfo from "../../component/all-user-details/user-info";
import goback from "../../assets/goback.svg";
import { User } from "../../types";
import "./user-details.scss";

const UserDetails: React.FC = () => {
  const { userId } = useParams();
  const { users, fetchUsers } = useUsers();
  const [userDetail, setUserDetail] = useState<User | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    if (users.length === 0) {
      fetchUsers();
    } else {
      const detail = users.find((user) => user.generalInfo.id === userId);
      if (!detail) {
        navigate("/404");
      } else {
        setUserDetail(detail);
      }
    }
  }, [userId, users, fetchUsers, navigate]);

  return (
    <>
      <div className="userdetailaction">
        <button className="goback" onClick={() => navigate(-1)}>
          <img src={goback} alt="Go Back" />
          Back to Users
        </button>

        <div className="header-action">
          <h1>User Details</h1>
          <div className="action">
            <button>Blacklist User</button>
            <button>Activate User</button>
          </div>
        </div>
      </div>

      <div className="user-details-container">
        <div className="user-details-header">
          <UserDetailsSummary userDetail={userDetail} />
          <UserDetailNav />
        </div>
        <div className="user-details-content">
          <Outlet />
          <UserDetailInfo userDetail={userDetail} />
        </div>
      </div>
    </>
  );
};

export default UserDetails;
