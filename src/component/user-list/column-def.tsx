import { useNavigate } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";
import { User } from "../../types";
import ActionMenu from "./action-menu";
import { FilterIcon } from "../../assets";
import "./userlist.scss";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
};

export const columns: ColumnDef<User>[] = [
  {
    id: "organization",
    accessorFn: (row) => row.generalInfo.organization,
    header: () => (
      <div className="column-header">
        <span>Organization</span>
        <img src={FilterIcon} alt="Sort" />
      </div>
    ),
    cell: (info) => info.getValue(),
  },
  {
    id: "fullName",
    accessorFn: (row) => row.generalInfo.fullName,
    header: () => (
      <div className="column-header">
        <span>Full Name</span>
        <img src={FilterIcon} alt="Sort" />
      </div>
    ),
    cell: (info) => {
      const navigate = useNavigate();
      return (
        <div
          className="clickable-full-name"
          onClick={() => navigate(`/user/${info.row.original.generalInfo.id}`)}
          style={{ cursor: "pointer" }}
        >
          {info.getValue() as string}
        </div>
      );
    },
  },
  {
    id: "email",
    accessorFn: (row) => row.generalInfo.email,
    header: () => (
      <div className="column-header">
        <span>Email</span>
        <img src={FilterIcon} alt="Sort" />
      </div>
    ),
    cell: (info) => info.getValue(),
  },
  {
    id: "dateJoined",
    accessorFn: (row) => row.generalInfo.dateJoined,
    header: () => (
      <div className="column-header">
        <span>Date Joined</span>
        <img src={FilterIcon} alt="Sort" />
      </div>
    ),
    cell: (info) => formatDate(info.getValue() as string),
  },
  {
    id: "phoneNumber",
    accessorFn: (row) => row.generalInfo.phoneNumber,
    header: () => (
      <div className="column-header">
        <span>Phone Number</span>
        <img src={FilterIcon} alt="Sort" />
      </div>
    ),
    cell: (info) => info.getValue(),
  },
  {
    id: "status",
    accessorFn: (row) => row.generalInfo.status,
    header: () => (
      <div className="column-header">
        <span>Status</span>
        <img src={FilterIcon} alt="Sort" />
      </div>
    ),
    cell: (info) => (
      <span className={`status ${(info.getValue() as string).toLowerCase()}`}>
        {info.getValue() as string}
      </span>
    ),
  },
  {
    id: "action",
    header: () => <span>Action</span>,
    cell: (info) => <ActionMenu userId={info.row.original.generalInfo.id} />,
  },
];

export default columns;
