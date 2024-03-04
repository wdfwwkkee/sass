import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.scss";
import Router from "./components/ui/Router.jsx";
import AuthProviders from "./providers/AuthProviders.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <Router />
      </AuthProviders>
    </QueryClientProvider>
  </React.StrictMode>
);
