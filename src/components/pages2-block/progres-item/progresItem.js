import './progresitem.scss'

const ProgresItem = ({color, text, info}) => {
    return ( 
        <div className="progres-item">
            <span className={`progres-color ${color}`}></span>
            <div className="progres-right">
                <h6 className="progres-text">{text}</h6>
                <p className="progres-info">{info}</p>
            </div>
        </div>
     );
}
 
export default ProgresItem;