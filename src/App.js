import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import GeneInfo from "./pages/GeneInfoPage";
import { ThemeProvider } from "styled-components";

const theme = {
  fg: "palevioletred",
  bg: "white"
};

/**
 * @description initialization query client for react-query
 * @see https://react-query.tanstack.com/reference/QueryClient
 */
const queryClient = new QueryClient();

/**
 * App
 * @description Main App component that handles main routes and HOC providers
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/">
              <GeneInfo />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
