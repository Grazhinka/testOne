
const Buttons=({text,setText})=>{
    return(
      <div className="ButtonsMainDiv">
          <button  className="btnSignIn">SIGN IN</button>
          <button  className="btnSearch">SEARCH</button>
          <button onMouseEnter={()=>{setText('Done')}}    onClick={()=>{setText('Done')}}  className="btnYes">{text}</button>
          <button  className="btnNext">Next</button>
           <button  className="btnPrice">Price:<span>3090</span></button>
      </div>
    )
}
export default Buttons