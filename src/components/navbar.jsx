import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    console.log(props);
    return ( 
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <i style={{color:"#61DBFB"}} className="fa-brands fa-react m-2"></i>
                            ReactApp
                    <span className='badge bg-primary m-2'>{props.productsCount}
                    <i  className="fa-solid fa-cart-shopping m-2"></i>
                    </span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/menu">Menu</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cart">Shopping Cart</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin">Admin</NavLink>
                            </li>  
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>                         
                        </ul>     
                    </div>
                </div>
            </nav>
        </React.Fragment>
     );
}
 
export default Navbar;