import './main.scss'
import Plus from '../../../images/icon/settings-icon/plus.svg'

const NewDishesItem = ({text}) => {
    return ( 
        <div className="newdishesitem">
            <img src={Plus} alt="" className="icon-dishes"/>
            <h3 className="text-dishes">{text}</h3>
        </div>
     );
}
 
export default NewDishesItem;