import { Outlet } from "react-router-dom";
import CardBody from "../components/CardBody";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartForm from "../components/CartForm";
const LayoutMain=()=>{
return(
    <div>
        <Header/>
        <CardBody/>
         <CartForm/> 
        <Outlet/>
        <Footer/>
    </div>
)
}
export default LayoutMain;