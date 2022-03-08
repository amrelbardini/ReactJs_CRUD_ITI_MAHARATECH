import React from 'react';
import Cart from './cart';
const Menu = (props) => {
    
    return (
        <React.Fragment>

            <table className="table">
                <thead>
                    <tr>
                    <th className="text-center" scope="col">#</th>
                    <th className="text-center" scope="col">Product</th>
                    <th className="text-center" scope="col">Price</th>
                    <th className="text-center" scope="col">Add to Cart</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {props.products.map(p=>(
                        <tr key={p.id} >
                            <td className="text-center">{p.id}</td>
                            <td  className="text-center">{p.name}</td>
                            <td className="text-center">{p.price}</td>
                            <td className="text-center">{<Cart addToCart={props.addToCart} product={p} products={props.products}/>}</td>
                        </tr>
                        ))}
                   
                   
                </tbody>
            </table>

        </React.Fragment>  

    );
}
 
export default Menu;
