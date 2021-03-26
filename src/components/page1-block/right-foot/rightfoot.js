import './rightfoot.scss'

import {
    Home,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Trash
} from '../../../images/icon/Icon.js'


const RightFoot = ( {footIcon,id, footInfo, footMoney} ) => {
    return (
        <div className="rightfoot">
            <div className="right-foot-top">
                <div className="right-top-left">
                    <img className="foot-miniIcon" src={footIcon} alt=""/>
                    <div className="left-right">
                        <p className="foot-info">{footInfo}</p>
                        <span className="foot-money">{footMoney}</span>
                    </div>
                </div>
                <div className="right-top-right">
                    <button className="right-buttton">{id}</button>
                    <p className="price">{footMoney}</p>
                </div>
            </div>
            <div className="right-foot-bottom">
                <input placeholder="Order Note..." type="text" className="foot-coment" />
                <button className="korzinka">
                    <span className="trash">{<Trash/>}</span>
                </button>
            </div>
        </div>
    );
}

export default RightFoot;