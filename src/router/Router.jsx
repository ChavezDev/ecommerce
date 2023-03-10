import { createBrowserRouter} from "react-router-dom";
import Form from "../components/pages/admin/product/Form";
import Table from "../components/pages/admin/product/Table";
import Error404 from "../components/pages/Error404";
import Home from "../components/pages/Home"
import Login from "../components/pages/Login";
import Product from "../components/pages/Product";
import Products from "../components/pages/Products";
import Register from "../components/pages/Register";
import Admin from "../template/Admin";
import App from "../template/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <Product/>,
      }
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/admin",
    element: <Admin/>,
    children: [
      {
        path: "/admin/productos",
        element: <Table />,
      },
      {
        path: "/admin/productos/crear",
        element: <Form/>
      },
      {
        path: "/admin/productos/editar/:id",
        element: <Form/>
      },
    ]
  }
]);

export default router;
