// src/components/UserList/columns.ts

import { ColumnDef } from "@tanstack/react-table";
import { User } from "../../types";
import ActionMenu from "./action-menu";
import { FilterIcon } from "../../assets/index"; // Ensure these icons are correctly imported

// import "./userList.scss";

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
    header: ({ column }) => (
      <div className="column-header">
        <span>Organization</span>
        <img
          src={
            column.getIsSorted() === "asc"
              ? FilterIcon
              : column.getIsSorted() === "desc"
              ? FilterIcon
              : FilterIcon
          }
          alt="Sort"
        />
      </div>
    ),
    cell: (info) => info.getValue(),
  },
  {
    id: "fullName",
    accessorFn: (row) => row.generalInfo.fullName,
    header: ({ column }) => (
      <div className="column-header" style={{ cursor: "pointer" }}>
        <span>Full Name</span>
        <img
          src={
            column.getIsSorted() === "asc"
              ? FilterIcon
              : column.getIsSorted() === "desc"
              ? FilterIcon
              : FilterIcon
          }
          alt="Sort"
        />
      </div>
    ),
    cell: (info) => info.getValue() as string,
  },
  {
    id: "email",
    accessorFn: (row) => row.generalInfo.email,
    header: ({ column }) => (
      <div className="column-header">
        <span>Email</span>
        <img
          src={
            column.getIsSorted() === "asc"
              ? FilterIcon
              : column.getIsSorted() === "desc"
              ? FilterIcon
              : FilterIcon
          }
          alt="Sort"
        />
      </div>
    ),
    cell: (info) => info.getValue(),
  },
  {
    id: "dateJoined",
    accessorFn: (row) => row.generalInfo.dateJoined,
    header: ({ column }) => (
      <div className="column-header">
        <span>Date Joined</span>
        <img
          src={
            column.getIsSorted() === "asc"
              ? FilterIcon
              : column.getIsSorted() === "desc"
              ? FilterIcon
              : FilterIcon
          }
          alt="Sort"
        />
      </div>
    ),
    cell: (info) => formatDate(info.getValue() as string),
  },
  {
    id: "phoneNumber",
    accessorFn: (row) => row.generalInfo.phoneNumber,
    header: ({ column }) => (
      <div className="column-header">
        <span>Phone Number</span>
        <img
          src={
            column.getIsSorted() === "asc"
              ? FilterIcon
              : column.getIsSorted() === "desc"
              ? FilterIcon
              : FilterIcon
          }
          alt="Sort"
        />
      </div>
    ),
    cell: (info) => info.getValue(),
  },
  {
    id: "status",
    accessorFn: (row) => row.generalInfo.status,
    header: ({ column }) => (
      <div className="column-header">
        <span>Status</span>
        <img
          src={
            column.getIsSorted() === "asc"
              ? FilterIcon
              : column.getIsSorted() === "desc"
              ? FilterIcon
              : FilterIcon
          }
          alt="Sort"
        />
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
    accessorFn: (row) => row.generalInfo.id,
    header: () => <span>Action</span>,
    cell: (info) => <ActionMenu userId={info.row.original.generalInfo.id} />,
  },
];

export default columns;
