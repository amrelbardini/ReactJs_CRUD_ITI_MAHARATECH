import React, { Component } from 'react';

import Product from './product';
class ShoppingCart extends Component {

    constructor(props){
        super(props);
         console.log("Shopping Cart constructor");
    }
    componentDidMount(){
        //call backend server
         console.log("componentDidMount call backend here and get my data!");
    }   
    render() {     
        return (
            <React.Fragment>
               <div className='container-fluid'>
                    <h1 className='m-2'>ShoppingCart</h1>
                    <button onClick={this.props.handleReset} className="btn btn-secondary m-2">
                        Reset
                    </button>
                    <ul>
                        {this.props.products.map(product => {
                            if(product.isInCart===true){
                               return <li className='list-unstyled' key={product.id}>
                                    <Product  product={product} products={this.props.products} onDelete={this.props.handleDelete} onDecrement={this.props.handledecrement} 
                                    onIncrement={this.props.handleIncrement}/>        
                                </li>
                            }else{
                                return <li key={product.id} className='list-unstyled'></li>;
                            }
                        }
                       )}
                    </ul>
               </div>
            </React.Fragment>
        );
    }
}
 
export default ShoppingCart;