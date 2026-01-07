import { Outlet } from "react-router-dom";
import CardBody from "../components/CardBody";
import HeaderCommon from "./HeaderCommon";
import Footer from "../components/Footer";

const Layout=()=>{
return(
    <div>
        <HeaderCommon/>
        <CardBody/>
        <Outlet/>
        <Footer/>
    </div>
)
}
export default Layout;