import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GlobalAppProvider } from "./context.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// queryClient is used to manage server state in React applications
// and is part of the React Query library.
// It provides a way to cache and synchronize data between the server and the client.
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalAppProvider>
      {/* The QueryClientProvider component is a context provider that makes the
      queryClient instance available to all components in the application. 
        
      This allows components to access and use the queryClient for data fetching
      and caching. */}
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </GlobalAppProvider>
  </StrictMode>
);
