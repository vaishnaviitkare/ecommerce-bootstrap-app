import React,{useContext}from "react";
import { ModalCon } from "../Context/ModalContext";
import "./CartForm.css";
import { DataCon } from "../Context/DataContext";
const CartForm=()=>{
    const {val}=useContext(ModalCon);
    const {closeModal}=useContext(ModalCon);
    const {data}=useContext(DataCon);
    const totaldata=data.reduce((sum,item)=>{
       return sum+(item.price*item.quantity);
    },0)
    return(
   <div className={`cart-panel ${val ? "open" : ""}`}>
      <button className="close-btn" onClick={closeModal}>X</button>

      <h2>CART</h2>

      <div className="cart-header">
        <span>ITEM</span>
        <span>PRICE</span>
        <span>QUANTITY</span>
      </div>
      {
        data.map((item)=>(
         <div className="cart-row" key={item.id}>
        <div className="cart-item">
         <img src={item.imageUrl} alt={item.title} />
         <span>{item.title}</span>
        </div>
         <span>${item.price}</span>
         <span>{item.quantity}</span>
         <button className="remove">REMOVE</button>
        </div>
        ))
      }
       <div className="cart-total">
        <span className="total">Total</span>
        <span>${totaldata}</span>
      </div>


      <button className="purchase-btn">PURCHASE</button>
    </div>
)
}
export default CartForm;