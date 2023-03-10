import { Outlet } from "react-router-dom";
import MainMenu from "../components/molecules/header/MainMenu";
import MainHeader from "../components/organisms/MainHeader";

const App = () => {
  return (
    <div>
      <MainHeader>
        <MainMenu/>
      </MainHeader>
      <div className="pt-28 max-w-200 m-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
