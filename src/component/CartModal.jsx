import React, { useCallback, useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { Navigate, useNavigate } from "react-router-dom";
import ValueContext from "./ValueContext";
const CartModal = ({ isOpen, setIsOpen, icon }) => {
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  const { setCartCount,cartCount, setTotal,product,pricing } = useContext(ValueContext);
  setTotal([...product.values()].reduce((acc, value) => acc + value, 0))
  const navigate = useNavigate();
  let total = 0
  function handlecheckout(){
    navigate("/checkout")
    closeModal()
    setCartCount(0)
  }
  return (
    <div>
      <div onClick={openModal} style={{cursor:'pointer',position:"relative",padding:'1rem'}}>{icon}
      {cartCount>0?<div style={{position:'absolute',top:'0',right:'0',background:'#000',color:'#FFF',borderRadius:'1rem',padding:'0rem 0.4rem',border:'1px solid #FFF'}}>{cartCount}</div>:""}
      </div>
      
      <Modal size={"xl"} isOpen={isOpen} onRequestClose={closeModal}>
        <div style={{display:'flex',justifyContent:'end'}}>
        <button onClick={closeModal} style={{color:'red',border:'none',fontSize:"24px"}}>x</button>
        </div>
      

        {cartCount > 0 ? (
          <>
           <div>
           <h2>items List</h2>
           <ul>
             {Array.from(product.entries()).map(([item, value]) => (
               total = total + (pricing.get(item) * (value+1)),
               <li key={item}>
                 {item} x {value+1} = {pricing.get(item) * (value+1)}
               </li>
             ))}
           </ul>
         </div>
         <div>Subtotal :- {total}</div>
         </>
        ) : (
          <div>
            <text>No Item Added In Cart</text>
          </div>
        )}
        <button style={{border:'1px solid black',padding:"0.4rem 1rem",borderRadius:'5px',cursor:'pointer',marginTop:"1rem"}} onClick={closeModal}>Cancel</button>
       {cartCount>0? <button style={{padding:"0.4rem 1rem",cursor:'pointer',border:'1px solid #F5F5F5',marginLeft:'1rem',borderRadius:'5px',background:'#000',color:"#FFF"}} onClick={handlecheckout}>proceed to checkout</button> :""}

      </Modal>
    </div>
  );
};

export default CartModal;
