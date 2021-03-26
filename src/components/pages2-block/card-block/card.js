import './card.scss'

const DashboardCard = ({img, protsent, icon, money,info}) => {
    return ( 
        <div className="dashboard-card">
            <div className="dashboard-top">
                <img src={img} alt="" className="card-img"/>
                <span className="card-span">{protsent}</span>
                <img src={icon} alt="" className="card-icon"/>
            </div>
            <div className="dashboard-middle">
                <h2 className="card-money">{money}</h2>
            </div>
            <div className="dashboard-bottom">
                <p className="card-info">{info}</p>
            </div>
        </div>
     );
}
 
export default DashboardCard;