import { RouterProvider } from "react-router-dom";
import Tost from "./components/Tost";
import AuthProvider from "./context/AuthProvider";
import routes from "./routes/Routes";

const App = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={routes} />
        <Tost />
      </AuthProvider>
    </>
  );
};

export default App;
