import './orderpersonal.scss'


const OrderPersonal = ({img, name, info, money, status}) => {
    return ( 
        <div className="order-personal">
            <div className="personal-1">
                <img src={img} alt="" className="person-icon"/>
                <h3 className="person-text">{name}</h3>
            </div>
            <div className="personal-2">
                <h3 className="person-text">{info}</h3>
            </div>
            <div className="personal-3">
                <div className="person-text">
                    <h3 className="person-text">{money}</h3>
                </div>
            </div>
            <div className="personal-4">
                <button className={`person-status ${status}`}>{status}</button>
            </div>
        </div>
     );
}
 
export default OrderPersonal;