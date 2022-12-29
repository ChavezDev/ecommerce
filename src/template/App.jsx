import { Outlet } from "react-router-dom"
import MainHeader from "../components/organisms/MainHeader"

const App = () => {
  return (
    <div>
      <MainHeader/>
      <Outlet/>  
    </div>
  )
}

export default App;