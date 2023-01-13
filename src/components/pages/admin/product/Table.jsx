import useFetch from "../../../../hooks/useFetch";

const Table = () => {
  const { data, error, loading } = useFetch(`public/products`);

  if (loading) return <h1>CARGANDO...</h1>;
  if (error) return <h1>Error en la peticion de productos</h1>;

  return (
    <div>
      <h1>Tabla</h1>
      {data.length === 0 ? (
        <p>No existen productos</p>
      ) : (
        data.map((product) => (
          <div key={product.id}>{JSON.stringify(data)}</div>
        ))
      )}
    </div>
  );
};

export default Table;
