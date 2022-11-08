import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import routes, { renderRoutes } from "./routes";

function App() {
  return (
    <SnackbarProvider dense maxSnack={3}>
      <Router>{renderRoutes(routes)}</Router>
    </SnackbarProvider>
  );
}

export default App;
