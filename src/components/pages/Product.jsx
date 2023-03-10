import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_URL } from "../../constants/env";

const Product = () => {
  const params = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`${API_URL}/public/products/${params.id}`).then((response) => {
      setProduct(response.data.data);
    });
  }, []);

  console.log(product)

  return (
    <div>
      <h1>Producto</h1>
    </div>
  );
};

export default Product;
