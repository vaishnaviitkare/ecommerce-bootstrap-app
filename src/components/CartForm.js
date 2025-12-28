import React,{useContext}from "react";
import { ModalCon } from "../Context/ModalContext";
import { Offcanvas } from "react-bootstrap";
const CartBody=()=>{
    const {val}=useContext(ModalCon);
    const {closeModal}=useContext(ModalCon);
return(
    <div className="cartform">
       <Offcanvas show={val} onHide={closeModal} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
)
}
export default CartBody;