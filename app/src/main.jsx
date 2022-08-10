import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/Index";
import Create from "./pages/Create";
import Post from "./pages/Post";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import SessionProvider from "./hooks/useSession";

dayjs.extend(relativeTime);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />}></Route>
              <Route path="/create" element={<Create />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path=":id" element={<Post />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </SessionProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
