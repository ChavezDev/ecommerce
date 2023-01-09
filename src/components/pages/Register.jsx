import axios from "axios";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { API_URL } from "../../constants/env";
import LoginTemplate from "../../template/LoginTemplate";

const Register = () => {
  const nav = useNavigate();

  const [error, setError] = useState();

  const handleSubmit = (evento) => {
    evento.preventDefault();
    const data = {
      email: evento.target.email.value,
      password: evento.target.password.value,
      details: {
        fullname: evento.target.fullname.value,
      },
    };

    axios
      .post(`${API_URL}/public/users`, data)
      .then(() => {
        nav("/login");
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <LoginTemplate title="Regístrate">
      <form onSubmit={handleSubmit}>
        <div className="text-center mb-2 pb-1">
          <input
            className="w-full text-center p-1 border-solid border-2 border-slate-200"
            type="text"
            name="fullname"
            placeholder="nombre completo"
            required
          />
        </div>
        <div className=" text-center mb-2 pb-1">
          <input
            className="w-full text-center p-1 border-solid border-2 border-slate-200"
            type="email"
            name="email"
            placeholder="correo electronico"
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
        <div className="text-center mb-12">
          <button className="bg-gradient w-full p-1 mb-3" type="submit">
            Crear Cuenta
          </button>
          <Link
            className="text-gray-500 hover:font-bold hover:text-red-600"
            to="/login"
          >
            ¿Ya tienes cuenta? Inicia Sesíon
          </Link>
        </div>
        {error && (
          <p className="text-center p-2 bg-red-100 text-red-800">
            {error?.response?.data.errors[0].message}
          </p>
        )}
      </form>
    </LoginTemplate>
  );
};

export default Register;
