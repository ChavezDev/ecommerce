import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../../../constants/env";
import { token } from "../../../../helpers/auth";
import { formatPrice } from "../../../../helpers/number";
import useFetch from "../../../../hooks/useFetch";
import Loader from "../../../atoms/Loader";

const Table = () => {
  const { data, loading, error } = useFetch("public/products");
  const nav = useNavigate();

  const deleteProduct = (producto) => {
    if (window.confirm(`Esta seguro de eliminar este producto`)) {
      axios
        .delete(`${API_URL}/admin/products/${producto.id}`, {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        })
        .then(() => (
          alert("Producto eliminado"),
          nav("/admin/productos")
        ));
    }
  };

  if (loading) return <Loader />;
  if (error) return <div>{error?.message}</div>;

  return (
    <div className="max-w-256 m-auto">
      <section className="p-16">
        <h1 className="text-4xl mb-6">Productos</h1>
        <div className="pt-1 mb-12 pb-1">
          <Link
            className="bg-gradient p-2 rounded-xl text-white"
            to="/admin/productos/crear"
          >
            Agregar producto
          </Link>
        </div>
        <table className="overflow-x-scroll w-full text-sm text-left overflow-x-scroll table-auto bg-white rounded-lg shadow-md">
          <thead className="bg-gradient">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 sm:text-center">
                Nombre
              </th>
              <th className="px-4 py-2 text-left text-gray-700 sm:text-center">
                Precio
              </th>
              <th className="px-4 py-2 text-left text-gray-700 sm:text-center">
                Editar
              </th>
              <th className="px-4 py-2 text-left text-gray-700 sm:text-center">
                Borrar
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr>
                <td
                  className="border px-4 py-2 text-center sm:text-left"
                  colSpan={4}
                >
                  No existen productos actualmente
                </td>
              </tr>
            )}
            {data.map((prod) => (
              <tr className="hover:bg-gray-200" key={prod.id}>
                <td className="border px-4 py-2 text-center sm:text-left">
                  {prod.product_name}
                </td>
                <td className="border px-4 py-2 text-center sm:text-left">
                  {formatPrice(prod.price)}
                </td>
                <td className="border px-4 py-2 text-center sm:text-left">
                  <Link to={`/admin/productos/editar/${prod.id}`}>Editar</Link>
                </td>
                <td className="border px-4 py-2 text-center sm:text-left">
                  <a
                    className="text-red-600 hover:cursor-pointer"
                    onClick={() => deleteProduct(prod)}
                  >
                    Eliminar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Table;
