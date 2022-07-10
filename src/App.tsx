import React from "react";
import { Provider } from "react-redux";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ExternalScriptImport from "./global/components/utils/ExternalScriptImport/ExternalScriptImport";
import { AppContainer } from "./global/styles/styled";

import theme from "./global/theme";
import Dashboard from "./pages/Dashboard";
import CommandDashboard from "./pages/Dashboard/sections/CommandDashboard";
import CommandDashboardEdit from "./pages/Dashboard/sections/CommandDashboardEdit/indesx";

import HomePage from "./pages/HomePage";
import { store } from "./redux";
import DashboardSidebar from "./shared/components/DashboardSidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <ExternalScriptImport
          scripts={[
            <link rel="preconnect" href="https://fonts.googleapis.com" />,
            <link rel="preconnect" href="https://fonts.gstatic.com" />,
            <link
              href="https://fonts.googleapis.com/css2?family=Finlandica:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
              rel="stylesheet"
            />,
          ]}
        />
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <AppContainer>
              <DashboardSidebar />

              <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route
                  path="/dashboard/commands"
                  element={<CommandDashboard />}
                />

                <Route
                  path="/dashboard/commands/:commandId"
                  element={<CommandDashboardEdit />}
                />
              </Routes>
            </AppContainer>
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
