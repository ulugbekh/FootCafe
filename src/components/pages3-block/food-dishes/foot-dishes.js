import './main.scss'

const FootDishesItem = ({img, info, money, bowls}) => {
    return ( 
        <div className="foot-dishes-item">
            <img src={img} alt="" className="foot-photo"/>
            <h3 className="info">{info}</h3>
            <div className="foot-bowls">
                <h6 className="foot-money">{money}</h6>
                <span className="spane"></span>
                <p className="foot-span">{bowls}</p>
            </div>
                <button className="foot-dishes-btn">Edit dish</button>
        </div>
     );
}
 
export default FootDishesItem;