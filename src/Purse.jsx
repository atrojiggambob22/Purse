import React from "react"
import {Wallet,Plus,Home, ArrowUpRight,ArrowDownLeft,DollarSign,Search,Bell, Settings,Target, CheckCircle,TrendingUp } from "lucide-react";
const Purse = () => {
    return(
        <>
        <div>
            <div>
               <div>
                <div>
                    {/* icon */}
                </div>
                <div>
                    <h3>Welcome back User</h3>
                    <p>Save smatter, reach your goals faster</p>
                </div>
               </div>
               <div>
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
                <div>
                <div>
                    <Wallet size={24}/>
                </div>
                <div>
                    <h3>Main Wallet</h3>
                    <p>Avalaible Balance</p>
                </div>
                <div><h3>$15,000</h3></div>
               </div>
                <div>
                    <div>
                        <ArrowDownLeft size={24}/>
                        <button>Add Money</button>
                        </div>
                    <div>
                        <ArrowUpRight size={24}/>
                        <button>Transfer</button>
                    </div>
                </div>

            </div>
            <div>
                <h3>Quick Actions</h3>
                <div>
                    <div>
                        <button><ArrowUpRight size={24}/></button>
                        <h4>Transfer</h4>
                    </div>
                    <div>
                        <button><ArrowDownLeft size={24}/></button>
                        <h4>Add Money</h4>
                    </div>
                    <div>
                        <button><Plus size={24}/></button>
                        <h4> New Purse</h4>
                    </div>
                    <div>
                        <button><DollarSign size={24}/></button>
                        <h4>Pay Bill</h4>
                    </div>
                </div>
            </div>

            <div className="Cheivement">
            <div>
                <div>
                    <h3>Total Saved</h3>
                    <p>$5,000</p>
                </div>
                <div>
                    <Wallet size={24}/>
                </div>
            </div>

            <div>
                <div>
                <h3>Total Goals</h3>
                <p>$73,000</p>

                </div>
                <div>
                    <Target size={24}/>
                </div>

            </div>
            <div>
                <div>
                    <h3>Goals Completed</h3>
                </div>
                <div>
                    <CheckCircle size={24}/>
                </div>
            </div>
            <div>
                <div>
                    <h3>Average Progress</h3>
                    <p>64.2</p>
                </div>
                <div>
                    <TrendingUp size={24}/>
                </div>
            </div>
            </div>

            <div className="History">
                <div>
                    <div>
                        <p>Recent Actiivty</p>
                        <p>View All</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Purse