import { Outlet } from "react-router-dom";
import AdminMenu from "../components/molecules/header/AdminMenu";
import MainHeader from "../components/organisms/MainHeader";

const Admin = () => {
  return (
    <div>
      <MainHeader>
        <AdminMenu/>
      </MainHeader>
      <div className="pt-28 max-w-200 m-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
