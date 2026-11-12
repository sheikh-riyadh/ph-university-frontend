import type { ReactNode } from "react";

export interface IRoute {
  path: string;
  element: ReactNode;
}

export interface IItems {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: IItems[];
}

export interface ISidebar {
  key: string;
  label: ReactNode;
  children?: ISidebar[];
}




