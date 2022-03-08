import React, { Component } from 'react';
import Joi from 'joi-browser';
class Login extends Component {
    state = { 
        username:"",
        password:"",
        errors:{},
     } 
 
    schema={ 
        username:Joi.string().required(),
        password:Joi.string().required(),
    }
    handleChange=(e)=>{
        e.preventDefault();
         //clone
         let state={...this.state};      
         //edit
         state[e.currentTarget.name]=e.currentTarget.value; 
         //setstate
         this.setState(state);
    }
    validate=()=>{
       const errors={};
        const state={...this.state};
        delete state.errors;
        const res=Joi.validate(state,this.schema,{abortEarly:false});
        if(res.error===null) return null;
       
        for(const error of res.error.details){
            errors[error.path]=error.message;
            console.log(errors);
        }
        //set state
        this.setState({errors});

    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const errors=this.validate();
       
        if(errors) return; 

        //call backend
        console.log("submit and call backend!");   
    }
    render() { 
        return (
            <React.Fragment>
            <div className='form-container ' style={{display:"flex",flexDirection:"row",justifyContent:"center",padding:"50px"}}>
                <form onSubmit={this.handleSubmit} className='container m-2' style={{width:"400px",Maxheight:"350px",borderRadius:"10px",backgroundColor:"#eee",padding:"20px"}}>
                    <div className="form-group ">
                        <label htmlFor="username"> Username</label>
                        <input onChange={this.handleChange} name='username' value={this.state.username} type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username"/> 
                        { this.state.errors.username && <div className="alert alert-danger m-1">{this.state.errors.username}</div>  }
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="password">Password</label>
                        <input  onChange={this.handleChange} name='password' type="password" value={this.state.password} className="form-control" id="password" placeholder="Password"/>
                        { this.state.errors.password && <div className="alert alert-danger m-1">{this.state.errors.password}</div>  } 
                    </div>                
                    <button style={{width:"100%",margin:"5px 0"}} type="submit" className="btn btn-success ">Submit</button>
                </form>
            </div>
        </React.Fragment> 
        );
    }
}
 
export default Login;