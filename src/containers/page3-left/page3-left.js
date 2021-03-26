
import './page3-left.scss'
import Page3Item from '../../components/pages3-block'

// import { settingsArr } from '../../components/array-block/settingArr';

// import { ico1 } from '../../images/icon/settings-icon/settingIcon';

import { Link, Route, Switch } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'






const PageThereLeft = ({ pageLink, setPageLink }) => {

    return (


        <div className="page3-left">
            <Link onClick={() => setPageLink('Appereance')} to="/PageThere/Appereance" >
                <div className={`page3-item ${pageLink == 'Appereance' ? 'activ' : ''}`}>
                    <img src="" alt="" />
                    <div className="page-item-right">
                        <h4 className="item-text">Appereance</h4>
                        <p className="item-mini-text">Dark and Light mode, Font size</p>
                    </div>
                </div>
            </Link>

            <Link onClick={() => setPageLink('Restaurant')} to="/PageThere/Restaurant" >
                <div className={`page3-item ${pageLink == 'Restaurant' ? 'activ' : ''}`}>
                    <img src="" alt="" />
                    <div className="page-item-right">
                        <h4 className="item-text">Your Restaurant</h4>
                        <p className="item-mini-text">Dark and Light mode, Font size</p>
                    </div>
                </div>
            </Link>
            <Link onClick={() => setPageLink('Products')} to="/PageThere/Products">
                <div className={`page3-item ${pageLink == 'Products' ? 'activ' : ''}`}>
                    <img src="" alt="" />
                    <div className="page-item-right">
                        <h4 className="item-text">Products Management</h4>
                        <p className="item-mini-text">Manage your product, pricing, etc</p>
                    </div>
                </div>
            </Link>
            <Link>
                <div className="page3-item">
                    <img src="" alt="" />
                    <div className="page-item-right">
                        <h4 className="item-text">Notifications</h4>
                        <p className="item-mini-text">Customize your notifications</p>
                    </div>
                </div>
            </Link>
            <Link>
                <div className="page3-item">
                    <img src="" alt="" />
                    <div className="page-item-right">
                        <h4 className="item-text">Security</h4>
                        <p className="item-mini-text">Configure Password, PIN, etc</p>
                    </div>
                </div>
            </Link>
            <Link>
                <div className="page3-item">
                    <img src="" alt="" />
                    <div className="page-item-right">
                        <h4 className="item-text">Security</h4>
                        <p className="item-mini-text">Configure Password, PIN, etc</p>
                    </div>
                </div>
            </Link>
            <Link>
                <div className="page3-item">
                    <img src="" alt="" />
                    <div className="page-item-right">
                        <h4 className="item-text">About Us</h4>
                        <p className="item-mini-text">Find out more about Posly</p>
                    </div>
                </div>
            </Link>
        </div>

    );
}

export default PageThereLeft;

