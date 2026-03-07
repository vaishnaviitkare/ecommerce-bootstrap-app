import React, { useContext } from 'react';
import CartForm from '../components/CartForm';
import { ModalCon } from '../Context/ModalContext';
import StoreData from '../components/StoreData';
function Store() {
  const {val}=useContext(ModalCon);
  return (
    <div>
      <StoreData/>
      {val && <CartForm/>}
    </div>
  );
}

export default Store;
