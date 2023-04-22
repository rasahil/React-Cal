import React from 'react'
function Login()
{   
   function loginHandle(e)
    {
        e.preventDefault()
    }
    return (
        <div>
            <h2>Login</h2>
            <form action="" onSubmit={loginHandle}>
                <input type="text" />
                <br /><br />
                <input type="text" />
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
   
}

export default Login;