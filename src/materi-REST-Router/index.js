import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import CheckoutPage from "./page/checkout";
import DetailPage from "./page/detail";
import ProductListPage from "./page/productList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <ProductListPage />,
        index: true,
      },
      {
        path: "/detail",
        element: <DetailPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);

const MateriREST = () => {
  return <RouterProvider router={router} />;
};

export default MateriREST;
