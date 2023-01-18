import axios from "axios";
import { API_URL } from "../../../../constants/env";
import { token } from "../../../../helpers/auth";

const Form = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      product_name: event.target.productName.value,
      price: Number(event.target.price.value),
      images: [event.target.image.value],
      description: event.target.description.value,
      features: {
        color: event.target.color.value,
      },
    };

    axios
      .post(`${API_URL}/admin/products`, data, {
        headers: {
          Authorization: `Bearer ${token()}`,
        },
      })
      .then((response) => {
        console.log(response);
        alert(`Producto creado`)
      })
      .catch( (err) => {
        console.log(err)
        alert("ERROR AL CREAR PRODUCTO")
      })
  };

  return (
    <section className="flex h-screen w-full items-center justify-center bg-gradient py-40 opacity-70">
  <div className="w-3/6 rounded-md bg-white op p-4">
    <div className="h-1/10 w-full">
      <h1 className="h-full w-full p-2 text-center text-sm font-semibold md:text-xl">Crear Producto</h1>
    </div>
    <div className="h-3/4 w-full p-3">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="w-full flex">
          <div className="w-full m-1">
            <label className="text-xs ">Nombre</label>
            <input className="w-full rounded-md p-1 bg-blue-200" type="text" name="productName"/>
          </div>
          <div className="w-full m-1">
            <label className="text-xs ">Modelo</label>
            <input className="w-full rounded-md p-1 bg-blue-200" type="text" name=""/>
          </div>
        </div>
        <div className="w-full p-1">
          <label className="text-xs">URL imagen</label>
          <input className="w-full rounded-md p-1 bg-blue-200" type="url" name="image"/>
        </div>  
        <div className="w-full flex">
          <div className="w-full m-1">
            <label className="text-xs ">Precio</label>
            <input className="w-full rounded-md p-1 bg-blue-200" type="number" name="price"/>
          </div>
          <div className="w-full m-1">
            <label className="text-xs ">Color</label>
            <input className="w-full rounded-md p-1 bg-blue-200" type="text" name="color"/>
          </div>
          <div className="w-full m-1">
            <label className="text-xs ">Talla</label>
            <input className="w-full rounded-md p-1 bg-blue-200" type="text" name=""/>
          </div>
          <div className="w-full m-1">
            <label className="text-xs ">stock</label>
            <input className="w-full rounded-md p-1 bg-blue-200" type="number" name=""/>
          </div>
          
        </div>
        <div className="w-full p-1">
          <label className="text-xs">Descripcion</label>
          <textarea className="w-full rounded-md p-1 bg-blue-200" name="description" id="DescripcionProduct" rows="3"></textarea>
        </div>
        <div className="w-full m-1 flex items-center justify-center">
            <button type="submit" className="rounded-md w-1/3 m-1 bg-blue-700 text-white p-1 hover:bg-green-600 text-sm">Crear Producto</button>
        </div>
      </form>
      </div>
    </div>
</section>
  );
};

export default Form;
