import React , {useState} from 'react'
import './Form.css'
// import { useForm } from "react-hook-form"
 function Form (){

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

//   const submitForm = (e) =>{
//       e.preventDefault();
      
//     setEmail("");
//     setPassword("");

//   }
  
//   constructor(); {
  
    
//     this.state={
//       input:{},
//       msg:{}
//     };
//     this.pwdConfirm=this.pwdConfirm.bind(this);
//     this.handleSubmit=this.handleSubmit.bind(this);
//   }

//  pwdConfirm1(e) ;{
//   var inputpswd=this.state.input;
//   inputpswd[e.target.name]=e.target.value;
//   this.setState|({
//     inputpswd
//   });
//  }

// function validation(){
//   var msg ={};
//   if(this.state.input["pswd"]!==this.state.input["cnfpswd"])
//   {
//     msg["pswd"]="Password is not  matching..!";
//   }
//   else{
//     msg["cnfpswd"]="Password is correct";
//   }
//   this.setState({
//     msg:msg
//   })
// }

//   handleSubmit(e)
//   {
//     if(this.validation()){
//       var input={};
//       input["pswd"]="";
//       input["cnfpswd"]="";
//     }
//   }


 

  return (
    <div><br /><br />
        
        <div className="maindiv p-5" >
          <form >
          <h2 className='text-center'>Login Form</h2>
              <div class="mb-3  ">
                <label for="floatingInput" >Name</label>
                <input type="name" class="form-control" id="floatingInput  "  placeholder="Name" Required="" value={name}
                onChange={(e) => {setName(e.target.value)
                console.log(name)}} />   
                {/* //{...register("name",{required:true})} */}
                {/* <error>
                  {errors.name?.type === "required" && "Proper name is Required"}
                </error> */}
                
              </div>

              <div class=" mb-3">
                 <label for="floatingInput">Email address</label>
                 <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                   Required="" />
                   {/* {...register("email",{required:true,pattern:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i})} */}
                 {/* <error>
                  {errors.email?.type === "required" && "Proper email is Required"}
                  {errors.email?.type === "pattern" && "Proper email is Required"}
                </error> */}
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder='**********' Required=""
                 name="pswd" value={this.state.input.pswd} onChange={this.pwdConfirm} />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder='**********' Required=""
                name="cnfpswd" value={this.state.input.cnfpswd} onChange={this.pwdConfirm} />
              </div>

              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Remember me</label>
              </div>

              <strong>
              <div className='text-danger'>{this.state.msg.pswd}</div>
              <div className='text-success'>{this.state.msg.cnfpswd}</div>
              </strong>

              <center>
              <button type="submit" class="btn btn-outline-success w-75"  >Success</button>
              </center>
              <p id="error"></p>
          </form>
        </div>
    </div>
  )
}

export default Form;

