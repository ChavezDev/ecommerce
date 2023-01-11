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
        alert
      });
  };

  return (
    <div>
      <h1>Crea Producto</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="productName" placeholder="Nombre" required />
        <input type="number" name="price" placeholder="Precio" required />
        <input type="url" name="image" placeholder="Imagen" required />
        <textarea name="description" rows="10" required />
        <input type="text" name="color" placeholder="Color" required />
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
};

export default Form;
