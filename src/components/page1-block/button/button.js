import './button.scss'

const Button = ({text, setBtnActiv, btnActiv}) => {
    return ( 
        <button 
        onClick={() => text == 'Cancel' ? setBtnActiv (!btnActiv):''}
        className="btn">{text}</button>
     );
}
 
export default Button;