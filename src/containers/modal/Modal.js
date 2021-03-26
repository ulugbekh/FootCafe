import './main.scss'

import ModalInput from '../../components/modal-input'
import CardButton from '../../components/card-button'
import {
    Btn1,
    Btn2,
    Btn3
} from '../../images/icon/Icon.js'
import Button from '../../components/page1-block/button'
import ModalInputBlock from '../../components/modalInputBlock'


import { Link, Route, Switch } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'

const Modal = ({ btnActiv, setBtnActiv }) => {

    const [modalLink, setModalLink] = useState('')
    return (
        <div className={`modal ${btnActiv ? 'activ' : ''}`}>
            <div

                className={`modal-inner ${btnActiv ? 'activ' : ''}`}>
                <h2 className="modal-text">
                    Payment
                </h2>
                <p className="modal-mini-text">
                    3 payment method available
                </p>
                <h3 className="input-text">

                </h3>
                <div className="card-button">
                    <CardButton
                        activ={btnActiv === 'CreditCard'}
                        onClick={() => setBtnActiv('CreditCard')}
                        text={'Credit Card'}
                    />
                    <CardButton
                        activ={btnActiv === 'paypal'}
                        text={'Paypal'}
                        onClick={() => setBtnActiv('paypal')}
                    />
                    <CardButton
                        text={'Cash'}
                        activ={btnActiv === 'cash'}
                        onClick={() => setBtnActiv('cash')}
                    />
                </div>
                <ModalInputBlock
                    btnActiv={btnActiv}
                    setBtnActiv={setBtnActiv}
                />


            </div>
        </div>
    );
}

export default Modal;