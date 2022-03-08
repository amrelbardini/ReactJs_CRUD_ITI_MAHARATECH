import React from 'react';
import {useParams,  useNavigate} from 'react-router-dom';

// import qs from 'query-string';

const ProductDetails = (props) => {
 
    const params=useParams();
    const navigate=useNavigate();
    const product=props.products.filter(p=>p.id===parseInt(params.id))[0];

    

    return (
        <React.Fragment>
            <main className='container '>
                <h1 className='text-capitalize text-center m-2'> product {product.id} details</h1>
                <h3> product name : {product.name}</h3>
                <h3> product count : {product.count}</h3>
                <h3> product id : {product.id}</h3>
                <button onClick={()=>navigate("/cart",{replace:true})} className='btn btn-primary m-2'>Save</button>
            </main>
        </React.Fragment>
     );
}
 
export default ProductDetails ;