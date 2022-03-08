import React from 'react';
import { Link, Outlet } from 'react-router-dom';



const About = (props) => {
    return (  
        <React.Fragment>
            <main className='container-fluid'>
                <h2 className='text-center m-2'>About</h2>
                <div className='row'>
                    <div className='col-3'>
                        <ul className='list-unstyled m-2'>
                            <li>
                                <Link style={{color:"#000",fontWeight:"bold"}}  className='text-decoration-none' to="/about/company">Our company</Link>
                            </li>
                            <li>
                                <Link style={{color:"#000",fontWeight:"bold"}} className='text-decoration-none' to='/about/team'>Our team</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col'>
                      
                       <Outlet/>
                         
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}
 
export default About;