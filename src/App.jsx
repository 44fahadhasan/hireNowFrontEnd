import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import Tost from "./components/Tost";
import AuthProvider from "./context/AuthProvider";
import routes from "./routes/Routes";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={routes} />
          <Tost />
        </AuthProvider>
      </QueryClientProvider>
      s
    </>
  );
};

export default App;
