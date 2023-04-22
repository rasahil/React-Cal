import React from 'react'
import './ValiForm.css'

const ValiForm = () => {


  return (
    <div className='maindiv'>

       <form action="">
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" Required=""/>
                <label for="floatingInput">Name</label>
            </div>

            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" Required=""/>
                <label for="floatingInput">Email address</label>
            </div>

            <div className="form-floating ">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" Required=""/>
                <label for="floatingPassword">Password</label>
            </div>
            <br />
            <div className=''>
                <input className='btn btn-success' type="Submit" value="Submit" />
            </div>
       </form>
      
    </div>
  )
}

export default ValiForm
