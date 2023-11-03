import React, { useCallback, useEffect, useState } from "react";
import Modal from "react-modal";
import { Navigate, useNavigate } from "react-router-dom";
const CartModal = ({ isOpen, setIsOpen, icon }) => {
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  let cartCount=1
  let products=1
   let total=1
   let setTotal=1
   let setCartCount=1
   let setProducts = 1

  const navigate = useNavigate();

  return (
    <div>
      <button
        className="cart-button"
        style={{ backgroundColor: "transparent" }}
        type="button"
        value="Open modal"
        onClick={openModal}
      >
        {icon}
        <div className="cart-count">{cartCount}</div>
      </button>
      <Modal size={"xl"} isOpen={isOpen} onRequestClose={closeModal}>
        <input
          type="button"
          value="x"
          onClick={closeModal}
          className="close-button"
        />
        {cartCount > 0 ? (
          <div className="cart-container">
            <div className="bottom">
              <text>Subtotal :-</text>
              {` ${total}`}
              <div>
                <button
                  className="cart-save"
                  onClick={() => {
                    // closeModal();
                    // setTotal(0)
                    // setCartCount(0)
                    // setProducts(
                    //     products.map((product) =>{
                    //       return { ...product, qty: 0} }
                    //     )
                    //   );
                    navigate("/checkout");
                  }}
                >
                  Save & Checkout
                </button>
                <button className="cart-cancel" onClick={() => closeModal()}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <text>No Item Added In Cart</text>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CartModal;
