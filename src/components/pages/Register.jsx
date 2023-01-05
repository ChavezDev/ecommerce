import { Link } from "react-router-dom";
import LoginTemplate from "../../template/LoginTemplate";

const Register = () => {
  return (
    <LoginTemplate title="Registro">
      <form>
        <div className="text-center mb-2 pb-1">
          <input
            className="w-full text-center p-1 border-solid border-2 border-slate-200"
            type="text"
            name="nombres"
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
          <Link className="text-gray-500 hover:font-bold hover:text-red-600" to="/login">
            ¿Ya tienes cuenta? Inicia Sesíon
          </Link>
        </div>
      </form>
    </LoginTemplate>
  );
};

export default Register;
