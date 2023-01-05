import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { API_URL } from "../../constants/env";
import { setToken } from "../../helpers/auth";
import LoginTemplate from "../../template/LoginTemplate";

const Login = () => {
  const nav = useNavigate();

  const [error, setError] = useState();

  const handleSubmit = (evento) => {
    evento.preventDefault(); // Investigar sobre este metodo
    setError();
    const data = {
      email: evento.target.email.value, // email es el input con ese nombre
      password: evento.target.password.value, // pasword es el input con ese nombre
    };

    console.log(data);

    axios
      .post(`${API_URL}/public/login`, data)
      .then((response) => {
        setToken(response.data.data.token);
        nav("/");
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <LoginTemplate title="Iniciar Sesion">
      <form onSubmit={handleSubmit}>
        <div className="text-center mb-2 pb-1">
          <input
            className="w-full text-center p-1 border-solid border-2 border-slate-200"
            type="email"
            name="email"
            placeholder="Correo electronico"
            required
          />
        </div>
        <div className=" text-center mb-2 pb-1">
          <input
            className="w-full text-center p-1 border-solid border-2 border-slate-200"
            type="password"
            name="password"
            placeholder="contraseña"
            required
          />
        </div>
        <div className="text-center mb-9">
          <button className="bg-gradient w-full p-1 mb-3" type="submit">
            Ingresar
          </button>
          <Link className="text-gray-500 hover:font-bold hover:text-red-600" to="/register">
            ¿Deseas registrarte?
          </Link>
        </div>
        {error && (
          <p className="text-center p-2 bg-red-100 hover:font-bold hover:text-red">
            {error?.response?.data?.data}
          </p>
        )}
      </form>
    </LoginTemplate>
  );
};

export default Login;
