import { ReactNode } from "react";

export interface IDashboardSidebarButtonProps {
  children: ReactNode;
  active: boolean;
  onClick: () => void;
}

export interface IButtonSideProps {
  active: boolean;
}
