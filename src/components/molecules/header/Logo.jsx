import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex">
      <Link to="/">
        <img
          className="w-16 m-3"
          src="https://cdn-icons-png.flaticon.com/512/513/513893.png"
          alt="Logo eccomerce"
        />
      </Link>
    </div>
  );
};

export default Logo;
