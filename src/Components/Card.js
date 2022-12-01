import { useState } from "react"

const Card=()=>{
    const [btn,setBtn]=useState(true)

    return(
    <div className="cardMain">
        <div className="card" >
            <div className="cardRow">
               <h3>Email authentification</h3>
               <button className="btnPlus">+</button>
            </div>
            <div className="cardRow">
               <h3>Google Two Factor</h3>
               <button className="btnPlus">+</button>
            </div>
            <div className="cardRow">
               <h3>Security key</h3>
               <button className="btnPlus">+</button>
            </div>
            <div className="cardRow">
               <h3>Sign in with biometrics</h3>
               <button className="btnOnOff" onClick={()=>setBtn(!btn)}><i className={btn? "fa-solid fa-toggle-off":"fa-solid fa-toggle-on"}></i></button>
            </div>
        </div>
    </div>
    )
}
export default Card