import useFetch from "../../hooks/useFetch";
import CardProduct from "../molecules/header/CardProduct";


const Products = () => {
  const { data, error, loading } = useFetch("public/products");

  if (loading) return <h1>Cargando...!</h1>;
  if (error) return <h1>Error en la peticion</h1>;

  return (
    <div className="mx-auto max-w-2xl py-4 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
        Productos
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 p-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.length === 0 ? (
          <p>No existen productos</p>
        ) : (
          data.map((product) => (
            <div className="group relative grid items-center mx-auto" key={product.id}>
            <CardProduct product={product}/>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
