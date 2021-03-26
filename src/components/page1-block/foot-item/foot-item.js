import './foot-item.scss'

const FootItem = ( {img,info, id, money, bowls} ) => {
    return ( 
        <div className="foot-item">
            <img src={img} alt="" className="foot-img"/>
            <h4 className="foot-info">{info}</h4>
            <p className="foot-money">{money}</p>
            <span className="foot-bowls">{bowls}</span>
        </div>
     );
}
 
export default FootItem;