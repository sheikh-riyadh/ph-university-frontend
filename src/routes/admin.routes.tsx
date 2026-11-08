import type { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";

interface IRoute {
  path: string;
  element: ReactNode;
}

interface ISidebar {
  key: string;
  label: ReactNode;
  children?: ISidebar[];
}

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

export const adminRoutes: IRoute[] = adminPaths.flatMap((item) => {
  const routes: IRoute[] = [];

  if (item.path && item.element) {
    routes.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    routes.push(
      ...item.children.map((child) => ({
        path: child.path,
        element: child.element,
      })),
    );
  }

  return routes;
});

export const adminSidebar = adminPaths.reduce<ISidebar[]>((acc, item) => {
  if (item.path && item.element) {
    acc.push({
      key: item.name,
      label: <NavLink to={`${item.path}`}>{item.name}</NavLink>,
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: <NavLink to={`${child.path}`}>{child.name}</NavLink>,
      })),
    });
  }

  return acc;
}, []);
