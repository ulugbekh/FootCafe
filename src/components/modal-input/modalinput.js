import './main.scss'
const ModalInput = ({textinput, placeholder, type, }) => {
    return (
        <div className="modailInput">
            <h6 className="text-input">{textinput}</h6>
            <input type={type}  placeholder={placeholder} className="inpute"/>
        </div>
      );
}
 
export default ModalInput;
