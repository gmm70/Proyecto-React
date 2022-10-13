import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {
    return (
      <div className="cart-widget">
        <FontAwesomeIcon icon={faCartArrowDown} size="2x" color="#182145" />
        <div className="qty-display">0</div>
      </div>
    );
  };
  
  export default CartWidget;
  

