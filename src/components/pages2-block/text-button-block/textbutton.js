
import './textbutton.scss'
const TextButton = ({text, button}) => {
    return ( 
        <div className="order-top">
            <h2 className="order-text">{text}</h2>
            <button className="setting">{button}</button>
         </div>
     );
}
 
export default TextButton;