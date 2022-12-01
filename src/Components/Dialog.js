
const Dialog=()=>{
    return(
    <div className="dialogMainDiv">
        <div className="dialogDiv">
            <p>What type of work would you like to do?</p>
            <div className="dialogBtnDivOne" >
                <button>Regular cleaning</button>
                <button>Window cleaning</button>
                <button>After Repairing</button>
                <button>After relocation</button>
            </div>
            <div className="dialogBtnDivTwo">
                <button>Back</button>
                <button>Next</button>
            </div>
        </div>
    </div>
    )
}
export default Dialog
