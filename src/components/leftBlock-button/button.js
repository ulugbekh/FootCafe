import './button.scss'

const Button = ({icon, active}) => {
    return ( 
        <button className={`button ${active ? 'activ' :''}`}>
            <span className={`iconSpan ${active ? 'activ' :''}`}>{icon}</span>
        </button>
     );
}
 
export default Button;