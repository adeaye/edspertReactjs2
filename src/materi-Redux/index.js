import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import CheckoutPage from "./page/checkout";
import DetailPage from "./page/detail";
import ProductListPage from "./page/productList";
import { Provider } from "react-redux/";
import store from "./store";

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
        path: "/detail/:id",
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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default MateriREST;
