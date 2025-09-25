import React from "react";
import './Login.css'

const SignUp =()=>{
    return(
        <>
        <body>
            

        <div className="homebody">
            <h1>Create An Account</h1>
            <div className="Formmain">
                <form action="post"  className="FormINfo">
                   
                     <label htmlFor="">Name</label>
                    <input type="text" placeholder="Astrojiggabob"/>

                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Input Email"/>

                    <label htmlFor="">
                        Password
                    </label>
                    <input type="text"  placeholder="Enter Password"/>

                    <div style={{display:"flex"}}>
                        <input className="chekboxxx" type="checkbox" style={{position:"relative", top:"-5px"}} />
                        <h3 style={{fontWeight:'100', fontSize:"15px", position:'relative', top:'5px'}}>I agree to the Terms of Service</h3>
                    </div>
                </form>
               

                <div className="btnLog btnSign">
                    <button>Create account</button>
                </div>
            </div>
        </div>
        </body>
        </>
    )
}
export default SignUp