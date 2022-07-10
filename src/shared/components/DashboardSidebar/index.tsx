import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { useReduxSelector } from "../../../hooks/useReduxSelector";
import { dashboardNavigate } from "../../../redux/slices/navigation";
import { selectActiveSidebarActionId } from "../../../redux/slices/navigation/selectores";
import DashboardSidebarButton from "./components/DashboardSidebarButton";

import * as S from "./styles";

import { ActionButtonId } from "./types";

const actionButtons = [
  {
    id: ActionButtonId.HOMEPAGE,
    icon: "H",
    navigateUrl: "/",
  },
  {
    id: ActionButtonId.DASHBOARD,
    icon: "D",
    navigateUrl: "/dashboard",
  },
  {
    id: ActionButtonId.COMMANDS,
    icon: "C",
    navigateUrl: "/dashboard/commands",
  },
];

export default function DashboardSidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useLayoutEffect(() => {
    actionButtons.forEach((action) => {
      if (matchPath(location.pathname, action.navigateUrl)) {
        dispatch(dashboardNavigate(action.id));
      }
    });
  }, []);

  const handleNavigation = (navigateTo: string, actionId: ActionButtonId) => {
    dispatch(dashboardNavigate(actionId));
    navigate(navigateTo);
  };

  return (
    <S.Container>
      {actionButtons.map((action) => (
        <DashboardSidebarButton
          active={!!matchPath(location.pathname, action.navigateUrl)}
          onClick={() => handleNavigation(action.navigateUrl, action.id)}
        >
          {action.icon}
        </DashboardSidebarButton>
      ))}
    </S.Container>
  );
}
