import React, { Component } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';

import Navbar from './navbar';
import ShoppingCart from './shoppingcart';
import About from './about';
import ProductDetails from './details';
import Notfound from './notfound';
import Company from './company';
import Team from './team';
import Menu from './menu';
import Login from './login';
import Admin from './admin';
import AdminProduct from './adminProduct';





class App extends Component {
    state = { 
        products:[
            
        ],
     } 
    
 async componentDidMount(){  
     let {data}= await axios.get('http://localhost:3000/products');
      //set state 
      this.setState({products:data});

        //  const promise=fetch("https://jsonplaceholder.typicode.com/posts");
        //  const res= promise.then(res=>res.json());
        //  res.then(res=>console.log(res));
     }
     handleDelete=(product)=>{
         //clone state
         //edit state
         let products=this.state.products.filter((p)=>p.id!==product.id);
         //set state
         this.setState({products});
     }
     handleReset=()=>{
         //clone state
         let products=[...this.state.products];
         //edit state 
         products.map((p)=>{
             p.count=0;
            return p});
         //set state
         this.setState({products});
     }
     handleIncrement=(product)=>{
        //clone state 
        let products=[...this.state.products];
        const index=products.indexOf(product);
        products[index]={...products[index]};
        //edit state 
        products[index].count++; 
        //set state
        this.setState({products});     
    }
    handledecrement=(product)=>{
        //clone state 
        let products=[...this.state.products];
        const index=products.indexOf(product);
        products[index]={...products[index]};
        //edit state 
        products[index].count--; 
        //set state
        this.setState({products});     
    }
    addToCart=(product)=>{
       
        //clone state 
        let products=this.state.products;
        const index=products.indexOf(product);
        products[index]={...products[index]};
        //edit state
      let newProducts= products.map(function(p){
            if(p.id===product.id){
                p.isInCart===true?p.isInCart=false:p.isInCart=true;
            }
            return p;
        });
      
        //set state 
        this.setState({products:newProducts});
        console.log("cart change");
    }

 handleRemove= async (product)=>{
     //optimistic UPDATE
    const oldProducts=[...this.state.products];
    //change state
    const products=this.state.products.filter(p=>p.id!==product.id);
    this.setState({products});
    try{
        //call backend 
     await axios.delete("http://localhost:3000/products/"+product.id);

    }catch(ex){
        toast.error('can not delete calling server failed!');
        this.setState({products:oldProducts});
    }
     
  }
 
    render() { 
        return (
            <React.Fragment>
                <ToastContainer/>
                <Navbar productsCount={this.state.products.filter(p=>p.isInCart>0).length}/>
                   <Routes>
                        <Route path="/cart"  element={ 
                                    <main className='container'>                    
                                        <ShoppingCart products={this.state.products} 
                                        handleReset={this.handleReset} 
                                        handleIncrement={this.handleIncrement}
                                        handledecrement={this.handledecrement} 
                                        handleDelete={this.addToCart}
                                        params={this.Params}
                                        />
                                    </main> 
                            }/>
                        <Route path='/about/' element={<About/>}>
                            <Route path='company' element={<Company/>}/>
                            <Route path='team' element={<Team/>}/>       
                        </Route> 
                        <Route path='/admin' element={<Admin products={this.state.products} onRemove={this.handleRemove} onEdit={this.handleEdit}/>}/>    
                        <Route path='/admin/adminproducts/:id' element={<AdminProduct/>}/>               
                        <Route path='/login' element={<Login/>}/>                     
                        <Route path='/menu' element={<Menu products={this.state.products} addToCart={this.addToCart}/>} />
                        <Route path="/products/:id" element={<ProductDetails products={this.state.products}/>}/> 
                        <Route path="/products/:id/:name" element={<ProductDetails products={this.state.products}/>}/> 
                        <Route path="/notfound" element={<Notfound/>}/>
                        <Route  path="*" element={<Navigate replace to="/notfound"/>}/>
                               
                   </Routes>              
            </React.Fragment>
        );
    }
}
 
export default App;