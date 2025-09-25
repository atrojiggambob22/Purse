import React from "react"
import {Wallet,Plus,Home, ArrowUpRight,ArrowDownLeft,DollarSign,Search,Bell, Settings,Target, CheckCircle,TrendingUp } from "lucide-react";
import "./Purse.css"
const Purse = () => {
    return(
        <>
        <body>
             <div>
            <div className="USerFeed">
               <div>
                <div>
                    {/* icon */}
                </div>
                <div>
                    <h3>Welcome back User</h3>
                    <p>Save smatter, reach your goals faster</p>
                </div>
               </div>
               <div className="IconSet">
                <div>
                    <div>
                        <Search size={24}/>
                    </div>
                    
                </div>
                <div>
                    <div>
                        <Bell size={24}/>
                    </div>
                    
                </div>
                <div>
                    <div>
                        <Settings size={24}/>
                    </div>
                    
                </div>
               </div>
            </div>

            <div className="AtmCArd">
                <div style={{padding:'15px 10px', color:'white'}}>
                    <div style={{display:"flex", marginBottom:"20px"}}>
                        <div className="Walet">
                    <Wallet size={30}/>
                </div>
                <div>
                    <h3>Main Wallet</h3>
                    <p>Avalaible Balance</p>
                </div>
               
                    </div>
                    <div>
                        <h3 style={{fontSize:"30px", fontWeight:"300"}}>$15,250.00</h3>
                
                <p>last Updated ..</p>
                </div>
                
               </div>
                
                <div className="MainCArd" style={{padding:'20px 10px', display:'flex', justifyContent:'space-around'}}>
                    <div className="" style={{backgroundColor:"transparent", borderRadius:"10px",border:"2px solid gray"}} >
                        
                        <button style={{background:"none",color:"white" }} > <ArrowDownLeft size={16} style={{position:"relative", top:"10px"}}/>Add Money</button>
                        </div>
                    <div className="" style={{backgroundColor:"white",borderRadius:"10px"}} >
                       
                        <button> <ArrowUpRight size={16} style={{position:"relative", top:"10px",}}/> Transfer</button>
                    </div>
                </div>

            </div>
            <div className="BodyQuickAction" style={{margin:"50px"}}>
                <h3>Quick Actions</h3>
                <div className="QuickAction">
                    <div>
                        <button style={{background:"blue", color:"white"}}><ArrowUpRight size={24}/></button>
                        <h4>Transfer</h4>
                    </div>
                    <div>
                        <button style={{background:"green"}}><ArrowDownLeft size={24}/></button>
                        <h4>Add Money</h4>
                    </div>
                    <div >
                        <button style={{background:"purple"}}><Plus size={24}/></button>
                        <h4> New Purse</h4>
                    </div>
                    <div>
                        <button style={{background:'orange'}}><DollarSign size={24}/></button>
                        <h4>Pay Bill</h4>
                    </div>
                </div>
            </div>

            <div className="Cheivement">
            <div className="CheivementHead">
                <div>
                    <h3>Total Saved</h3>
                    <p>$5,000</p>
                </div>
                <div style={{backgroundColor:"#8fb5da40", padding:"10px", borderRadius:"10px"}}>
                    <Wallet size={30} style={{color:"blue"}}/>
                </div>
            </div>

            <div className="CheivementHead">
                <div>
                <h3>Total Goals</h3>
                <p>$73,000</p>

                </div>
                <div>
                    <Target size={30} style={{color:"purple",background:"#da8fcb3e",padding:"10px", borderRadius:"10px"}}/>
                </div>

            </div>
            <div className="CheivementHead">
                <div>
                    <h3>Goals Completed</h3>
                    <p>1/4</p>
                </div>
                <div>
                    <CheckCircle size={30} style={{color:"green",background:"#8fdab62a",padding:"10px", borderRadius:"10px"}}/>
                </div>
            </div>
            <div className="CheivementHead">
                <div>
                    <h3>Average Progress</h3>
                    <p>64.2</p>
                </div>
                <div>
                    <TrendingUp size={30} style={{color:"orange",background:"#ecc2882a",padding:"10px", borderRadius:"10px"}}/>
                </div>
            </div>
            </div>

            <div className="History">
                <div>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Recent Actiivty</p>
                        <p>View All</p>
                    </div>
                </div>
            </div>
        </div>
        </body>
       
        </>
    )
}
export default Purse