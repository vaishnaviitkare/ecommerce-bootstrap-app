import HeaderCommon from "./HeaderCommon";
import CardBodyHome from "../components/CardBodyHome";
import { Outlet } from "react-router-dom";
import FooterHome from "../components/FooterHome";
const LayoutHome=()=>{
return(
    <div>
        <HeaderCommon/>
       <CardBodyHome/>
        <Outlet/>
        <FooterHome/>
    </div>
)
}
export default LayoutHome;