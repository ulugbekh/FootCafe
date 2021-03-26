import './foot-block.scss'

const FootBlock = ({id, img,name,dishes}) => {
    return ( 
        <div className="foot-block">
            <img src={img} alt="" className="foot-item"/>
            <div className="foot-block-inner">
                <h4 className="foot-name">{name}</h4>
                <p className="foot-dishes">{dishes}</p>
            </div>
        </div>
     );
}
 
export default FootBlock;