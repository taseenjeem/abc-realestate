import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavigationBar from "./Resources/components/NavigationBar";
import LandingPage from "./Resources/pages/LandingPage";

function App() {
  // React-Routes Implement Starts
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/home", element: <LandingPage /> },
  ]);
  // React-Routes Implement Ends
  return (
    <>
      <NavigationBar />
      {/* Apply the routes bellow */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
