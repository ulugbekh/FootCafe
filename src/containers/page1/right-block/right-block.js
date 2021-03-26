import './right-block.scss'
import Button from '../../../components/page1-block/button'
import RightFoot from '../../../components/page1-block/right-foot'
import korzinka from '../../../images/photo/foot/Content/Trash.svg'

import { Link, Route, Switch } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'

const RightBlock = ({data, btnActiv, setBtnActiv}) => {

    console.log(btnActiv);

    return ( 
        <div className="rightblock">
            
            <div className="btn-block">
            <Button
                text={'Dine In'}
            />
            <Button
                text={'To Go'}
            />
            <Button
                text={'Delivery'}
            />
            </div>
            <div className="right-text">
                <p className="item">Item</p>
                <div className="item-right">
                    <p className="item">Qty</p>
                    <p className="item">Price</p>
                </div>
            </div>
            <div className="right-foots">
                {
                    data.map(item => (
                        <RightFoot
                            footIcon={item.img}
                            footInfo={item.info}
                            footMoney={item.money}
                            id={item.id}
                        />
                    ))
                }
            </div>
            <div className="right-block-bottom">
                <div className="discount-block">
                    <h5 className="discount">Discount</h5>
                    <p className="discaount-item">${}</p>
                </div>
                <div className="discount-block discount2">
                    <h5 className="discount">Sub total</h5>
                    <p className="discaount-item">${}</p>
                </div>

                <div  className="right-block-btn">
                    <button
                        onClick={() => setBtnActiv(!btnActiv)}
                          className="discaon-btn">Continue to Payment</button>
                </div>

            </div>
        </div>
     );
}
 
export default RightBlock;