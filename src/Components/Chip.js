
const Chip=({iconMoney,iconOffer,iconList})=>{
    const names=['Jane Cooper', 'Ester Howard', 'Leslie Aleksandr', 'Jane Cooper']
    return(
    <div>
        <div className="chipMain" >
        <div className="space">
            <p className="chipName"><img alt='icon' src={iconMoney} width='30px' /> General price</p>
            <p className="iconChip"><img alt='icon' src={iconOffer} width='30px' /></p>
            <p className="iconChip"><img alt='icon' src={iconList} width='30px' /></p>
        </div>
        <div className="space">
            <p className="iconChip"><img alt='icon' src={iconMoney} width='30px' /></p>
            <p className="chipName"><img alt='icon' src={iconOffer} width='30px' /> Create offer</p>
            <p></p>
        </div>
        <div className="space">
            <p></p>
            <p></p>
            <p className="chipName"><img alt='icon' src={iconList} width='30px' /> Saved offers</p>
        </div>
        </div>
        <div className="rowChip">
         {names.map((oneName,index)=>{
            return(
            <div key={index} className="positionChip">
               <p>{oneName}</p>
               <button className="positionBtn"><i className="fa-solid fa-xmark"></i></button>
            </div>
            )
         })}
         </div>
    </div>
    )
}
export default Chip


