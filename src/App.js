import "./App.css";
import ProductPage from "./Pages/ProductPage";
import ProductEditPage from "./Pages/ProductEditPage";
import Header from "./components/Header";
import MainPage from "./Pages/MainPage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="/" element={<MainPage/>} />
        <Route path="/Product" element={<ProductPage/>} />
        <Route index path="/Edit" element={<ProductEditPage/>} />
      </Route>)
  );

  return <RouterProvider router={router} />;

}

const Root = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  )
};

export default App;
