import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AddProduct from "./../Pages/AddProduct";
import MyCart from "./../Pages/MyCart";
import Login from "./../Pages/Login";
import Registration from "./../Pages/Registration";
import RollsRoyce from "../Components/RollsRoyce";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../Pages/ProductDetails";
import Bmw from "../Components/Bmw";
import Tesla from "../Components/Tesla";
import Nissan from "../Components/Nissan";
import Hyundai from "../Components/Hyundai";
import Toyota from "../Components/Toyota";
import UpdateProduct from "../Pages/UpdateProduct";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const brandsData = await fetch(
            `https://assign-10-server-three.vercel.app/brands`
          ).then((response) => response.json());
          const blogsData = await fetch(`/blogsData.json`).then((response) =>
            response.json()
          );
          return { brandsData, blogsData };
        },
      },
      {
        path: "/brands/rolls-royce",
        element: <RollsRoyce></RollsRoyce>,
        loader: () =>
          fetch(`https://assign-10-server-three.vercel.app/products/`),
      },
      {
        path: "/brands/bmw",
        element: <Bmw></Bmw>,
        loader: () =>
          fetch(`https://assign-10-server-three.vercel.app/products/`),
      },
      {
        path: "/brands/tesla",
        element: <Tesla></Tesla>,
        loader: () =>
          fetch(`https://assign-10-server-three.vercel.app/products/`),
      },
      {
        path: "/brands/nissan",
        element: <Nissan></Nissan>,
        loader: () =>
          fetch(`https://assign-10-server-three.vercel.app/products/`),
      },
      {
        path: "/brands/hyundai",
        element: <Hyundai></Hyundai>,
        loader: () =>
          fetch(`https://assign-10-server-three.vercel.app/products/`),
      },
      {
        path: "/brands/toyota",
        element: <Toyota></Toyota>,
        loader: () =>
          fetch(`https://assign-10-server-three.vercel.app/products/`),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assign-10-server-three.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assign-10-server-three.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch(`https://assign-10-server-three.vercel.app/carts`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);
export default MainRoute;