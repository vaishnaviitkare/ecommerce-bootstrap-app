import { Outlet } from "react-router-dom";
import CardBody from "../components/CardBody";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutMain=()=>{
return(
    <div>
        <Header/>
        <CardBody/>
        <Outlet/>
        <Footer/>
    </div>
)
}
export default LayoutMain;