import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Product extends Component {
      getClasses(){
          return this.props.product.count===0 ?"badge bg-warning m-2":"badge bg-primary m-2";
      }
    render() { 
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-1 ">  
                        <h6 className='m-2 text-capitalize'>
                            <Link className='text-decoration-none'  to={`/products/${this.props.product.id}`}>
                                {this.props.product.name}
                            </Link>    
                        </h6>
                    </div>
                    <div className="col-11">
                        <img  style={{width:"30px",height:"30px"}} src={this.props.product.imgUrl} alt='product' />
                        <span className={this.getClasses()}>{this.props.product.count}</span>
                        <button onClick={()=>this.props.onIncrement(this.props.product)}  className="btn btn-primary btn-sm m-1">+</button> 
                        <button onClick={()=>this.props.onDecrement(this.props.product)}  className="btn btn-primary btn-sm m-1">-</button> 
                        <button onClick={()=>this.props.onDelete(this.props.product)} className=' btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Product;