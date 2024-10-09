import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
