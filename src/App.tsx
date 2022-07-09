import React from "react";
import { Provider } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ExternalScriptImport from "./global/components/utils/ExternalScriptImport/ExternalScriptImport";

import theme from "./global/theme";
import Dashboard from "./pages/Dashboard";
import CommandDashboard from "./pages/Dashboard/sections/CommandDashboard";

import HomePage from "./pages/HomePage";
import { store } from "./redux";

function App() {
  return (
    <>
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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/dashboard" element={<Dashboard />} />

              <Route
                path="/dashboard/commands"
                element={<CommandDashboard />}
              />
            </Routes>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
