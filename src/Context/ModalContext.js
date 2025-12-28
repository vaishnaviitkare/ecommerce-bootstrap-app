import React,{useState}from "react";
export const ModalCon=React.createContext();
export const ModalContext=(props)=>{
   const[val,setValue]=useState(false);
   const openModal=()=>{
     setValue(true);
    }
    const closeModal=()=>{
        setValue(false);
    }
    return(
        <ModalCon.Provider value={{val,openModal,closeModal}}>
         {props.children}
        </ModalCon.Provider>
    )
}