import { BrowserRouter, createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import MainCV from "./pages/MainCV";

const router = createBrowserRouter([
  {
    path: import.meta.env.VITE_URL_PREFIX || "",
    children: [{ index: true, element: <MainCV /> }],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
