import React from "react";
import './Login.css'
 const Login =()=>{
    return (
        <>
        <body>
            

        <div className="homebody">
            <h1>Purse</h1>
            <div className="Formmain">
                <form action="post"  className="FormINfo">
                   
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Input Email"/>

                    <label htmlFor="">
                        Password
                    </label>
                    <input type="text"  placeholder="Enter Password"/>
                </form>
                <div className="Formdownsection">
                    <div style={{display:'flex', }}>
                        <input type="checkbox" />
                        <h3>Remerber me</h3>
                    </div>
                    <div className="forgetpass">
                        <h3>Forget password</h3>
                    </div>
                </div>

                <div className="btnLog">
                    <button>Login</button>
                </div>
            </div>
        </div>
        </body>
        </>
    )
 }
 export default Login