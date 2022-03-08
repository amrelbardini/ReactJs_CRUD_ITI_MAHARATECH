import React,{Component} from 'react';
import axios from 'axios';
import { useNavigate,useParams } from "react-router-dom";

class AdminProduct extends Component {
    state = {  
        name:"",
        price:"",
        id:'',
    } 
   async componentDidMount(){
        const id=this.props.params.id;
        if(id !=='new'){
        const {data}= await axios.get('http://localhost:3000/products/'+id);
        //clone state 
        const state={...this.state};
        //edit 
        state.name=data.name;
        state.price=data.price;
        state.id=data.id;
        //setstate
        this.setState(state);

        }
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
    handleSubmit= async (e)=>{
        e.preventDefault();
        const id=this.props.params.id;
        //obj to be added to the database 
        if(id==="new"){         
            const obj={...this.state,count:0,isInCart:false,imgUrl:"logo192.png"};
            //call backend
             await axios.post('http://localhost:3000/products',obj);
            console.log("submit");
        }else{         
            const obj={...this.state,count:0,isInCart:false,imgUrl:"logo192.png"};
            //delete id 
            delete obj.id;
            //call backend
             await axios.put('http://localhost:3000/products/'+this.state.id,obj);
            console.log("submit");
        }
        

        //redirect user using replace to admin page
        this.props.history('/admin');

    }
    render() { 
        return (
            <React.Fragment>
                 <h2 className='text-center m-2'>{this.props.params.id==="new"?"add product":"Edit product"}</h2> 
            <div className='form-container ' style={{display:"flex",flexDirection:"row",justifyContent:"center",padding:"30px"}}>   
                         
                <form onSubmit={this.handleSubmit}  className='container m-2' style={{width:"400px",Maxheight:"350px",borderRadius:"10px",backgroundColor:"#eee",padding:"20px"}}>
                    <div className="form-group m-2 ">
                        <label htmlFor="name"> Name</label>
                        <input onChange={this.handleChange}  name='name' value={this.state.name}  type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name"/> 
                        
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="price">price</label>
                        <input onChange={this.handleChange}  name='price'  id="price" type="text" value={this.state.price} className="form-control" placeholder="price"/>
                     
                    </div>                
                    <button style={{width:"100%",margin:"5px 0"}} type="submit" className="btn btn-success ">{this.props.params.id==="new"?"add":"Edit"}</button>
                </form>
            </div>
        </React.Fragment>

        );
    }
}
 
export default  (props)=>(<AdminProduct {...props} params={useParams()} history={useNavigate()} />);