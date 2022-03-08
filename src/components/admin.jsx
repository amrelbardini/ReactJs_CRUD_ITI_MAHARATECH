import React from 'react';
import Edit from './edit';
import Delete from './delete';
import {  useNavigate } from 'react-router-dom';
const Admin = (props) => {
    console.log(props);
    const navigate=useNavigate();
    return (
        <React.Fragment>    
            <div className='products container-fluid'>
                    <h2>Admin</h2>
                    <button onClick={()=>navigate('/admin/adminproducts/new')} className="btn btn-primary" >ADD</button>
                    <table className="table">
                    <thead>
                        <tr>
                        <th className="text-center" scope="col">Product</th>
                        <th className="text-center" scope="col">Price</th>
                        <th className="text-center" scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.products.map(p=>(
                        <tr key={p.id} >
                            <td  className="text-center">{p.name}</td>
                            <td className="text-center">{p.price}</td>
                            <td className="text-center">{<Edit onEdit={()=>navigate(`/admin/adminproducts/${p.id}`)} />}</td>
                            <td className="text-center">{<Delete onRemove={()=>props.onRemove(p)}/>}</td>
                        </tr>
                        ))}                 
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}
 
export default Admin;