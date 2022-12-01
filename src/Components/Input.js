
const Form=()=>{
    return(
        <div className="inputRow">
            <div className="column formOne">
                <label>New password*</label><input/>
                <label>Repeat new password*</label><input/>
            </div>
            <div className="inputRow formTwo" >
                <div className="column">
                    <input placeholder="Apartament number*"/>
                    <input placeholder="Entrance number*"/>
                </div>
                <input placeholder="Entrance code"/>
            </div>
        </div>
    )
}
export default Form