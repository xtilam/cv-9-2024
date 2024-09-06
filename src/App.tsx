import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainCV from "./pages/MainCV";

const router = createBrowserRouter([
  {
    index: true,
    element: <MainCV />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
