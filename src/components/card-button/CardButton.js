import './main.scss'
import Click from '../../images/icon/click.svg'


const cardButton = ({icon, text, activ}) => {
    const ckickFn = (evt) => {
        const buttons = document.querySelectorAll('.cardButton')

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('activ')
        }
        evt.currentTarget.classList.add('activ')
    }

    return ( 
        <button className='cardButton' onClick={ckickFn}>
            <img src="" alt=""/>
            <h3 className="card-text">{text}</h3>
            <img src={Click} alt="" className="click"/>
        </button>
     );
}
 
export default cardButton;