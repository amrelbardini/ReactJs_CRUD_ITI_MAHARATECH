import React from 'react';
const Cart = (props) => {
    let clickChange={color:"black"};
    props.product.isInCart===true?clickChange={color:"black",cursor:"pointer"}:clickChange={color:"#ccc",cursor:"pointer"};
    return (
        <React.Fragment>
            <i onClick={()=>props.addToCart(props.product)} style={clickChange} className="fa-solid fa-cart-shopping"></i>
        </React.Fragment>  
    );
}
 
export default Cart;
