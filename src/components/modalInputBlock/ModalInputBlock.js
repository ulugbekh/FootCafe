import './main.scss'

import ModalInput from '../modal-input'
import Button from '../page1-block/button'
const ModalInputBlock = ({btnActiv, setBtnActiv}) => {
    console.log(btnActiv);
    return ( 
        <div className="modal-input-block">
             <div className="modal-inputBlock">
                    <ModalInput
                        textinput={'Cardholder Name'}
                         placeholder={'Levi Ackerman'} 
                         type={'text'}
                    />
                    <ModalInput
                        textinput={'Card Number'}
                         placeholder={'2564 1421 0897 1244'} 
                         type={'number'}
                    />
                </div>
                <div className="modal-payment">
                        <ModalInput
                        textinput={'Expiration Date'}
                         placeholder={'02/2022'} 
                         type={'number'}
                    />
                    <ModalInput
                        textinput={'CVV'}
                         placeholder={'. . .'} 
                         type={'password'}
                    />
                </div>

                <div className="modal-payment1">
                        <ModalInput
                        textinput={'Order Type'}
                         placeholder={'Dine In'} 
                         type={'text'}
                    />
                    <ModalInput
                        textinput={'Table no.'}
                         placeholder={'140'} 
                         type={'number'}
                    />
                </div>
                <div 
                className="modal-btn">
                    <Button 
                        setBtnActiv={setBtnActiv}
                        btnActiv={btnActiv}
                        text={'Cancel'}
                    />
                    <Button
                        text={'Confirm Payment'}
                    />
                </div>
        </div>
     );
}
 
export default ModalInputBlock;