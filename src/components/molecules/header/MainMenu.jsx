import { Link, useNavigate } from "react-router-dom";
import { deleteToken, token } from "../../../helpers/auth";

const MainMenu = () => {
  const nav = useNavigate()

  const handleSession = () => {
    deleteToken();
    nav("/")
  };

  return (
    <nav className="w-full">
      <ul className="flex justify-end text-gray-100">
        <li className="flex items-center">
          <Link to="/" className="menu-item">
            Inicio
          </Link>
        </li>
        <li className="flex items-center">
          <Link to="/products" className="menu-item">
            Productos
          </Link>
        </li>
        {!token() ? (
          <li className="flex items-center">
            <Link to="/login" className="menu-item">
              Iniciar Sessíon
            </Link>
          </li>
        ) : (
          <li className="flex items-center">
            <a onClick={handleSession} className="menu-item cursor-pointer">
              Cerrar Sesíon
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MainMenu;
