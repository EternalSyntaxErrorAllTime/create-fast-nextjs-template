"use client";

import type { TypeLayout } from "basic.types";
import type { SnackbarProviderProps } from "notistack";

import theme from "./theme";
import { store } from "@redux/store";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 2,
    },
  },
});

const SettingSnackbar: SnackbarProviderProps = {
  maxSnack: 10,
  autoHideDuration: 6100,
  preventDuplicate: true,
  anchorOrigin: { vertical: "bottom", horizontal: "right" },
};

const LayoutClient: TypeLayout = ({ children }) => {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <SnackbarProvider {...SettingSnackbar}>{children}</SnackbarProvider>
            {process.env.NODE_ENV === "development" && (
              <ReactQueryDevtools initialIsOpen={false} />
            )}
          </Provider>
        </QueryClientProvider>
        <CssBaseline />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default LayoutClient;
