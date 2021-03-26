import PageTop from '../components/page1-block/pag1-topblock'
import {
    FootItem,
    Dishes,
    Soup
} from '../components/page1-block/foot-item'
import RightBlock from '../containers/page1/right-block'
import RightFoot from '../components/page1-block/right-foot'


import {foot} from '../components/array-block/array'
import './page.scss'
import { Link, Route, Switch } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'
import Modal from '../containers/modal'

const PageOne = () => {

    

    const [menuLink, setMenuLink] = useState('')
    const [btnActiv, setBtnActiv] = useState('')

    

    return ( 
        <div className="pages-1">
            <div className="page1">
            <PageTop
                text1='Jaegar Resto'
                text2="Tuesday, 2 Feb 2021"
            />
            <div className="dropdawn">
            <Link 
                onClick={() => setMenuLink ('Hot') } 
                to="/PageOne/FootItem" 
                className={`drop-link ${menuLink == 'Hot' ? 'activ' : ''}`}>Hot Dishes
            </Link>
            <Link 
            onClick={() => setMenuLink ('Dishes') } 
            to="/pageOne/Dishes"
            className={`drop-link ${menuLink == 'Dishes' ? 'activ' : ''}`}>Cold Dishes
             </Link>
            <Link
                onClick={() => setMenuLink ('Soup')} 
                to="/pageOne/Soup"
                className={`drop-link ${menuLink == 'Soup' ? 'activ' : ''}`}>Soup
             </Link>
            <Link
                onClick={() => setMenuLink ('Gril')} 
                to="/pageOne/Gril"
                className={`drop-link ${menuLink == 'Gril' ? 'activ' : ''}`}>Grill
             </Link>
            <Link
                onClick={() => setMenuLink ('Appe')} 
                to="/pageOne/Appe"
                className={`drop-link ${menuLink == 'Appe' ? 'activ' : ''}`}>Appe tizer
             </Link>
            <Link
                onClick={() => setMenuLink ('Dess')} 
                to="/pageOne/Dess"
                className={`drop-link ${menuLink == 'Dess' ? 'activ' : ''}`}>Dess  ert
                </Link>
            </div>
            <div className="page-item">
                <h2 className="page-text">Choose Dishes</h2>
                <select className="selected" name="" id="">
                    <option value="Dine In">Dine In</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
            </div>
            <div className="foot-page">
                <Switch>
                    <Route path="/PageOne/FootItem">
                 <>
                 {
                    foot.map((item,index) => (
                        <FootItem
                            key={index}
                            img={item.img}
                            info={item.info}
                            money={item.money}
                            bowls={item.bowls}
                            id={item.id}
                        />
                    ))
                }
                 </>
                    </Route>

                    <Route path="/PageOne/Dishes">
                 <>
                 {
                    foot.slice(2, 7).map((item,index) => (
                        <FootItem
                            key={index}
                            img={item.img}
                            info={item.info}
                            money={item.money}
                            bowls={item.bowls}
                            id={item.id}
                        />
                    ))
                }
                 </>
                    </Route>

                    <Route path="/PageOne/Soup">
                 <>
                 {
                    foot.slice(4, 7).map((item,index) => (
                        <FootItem
                            key={index}
                            img={item.img}
                            info={item.info}
                            money={item.money}
                            bowls={item.bowls}
                            id={item.id}
                        />
                    ))
                }
                 </>
                    </Route>
                </Switch>
            </div>
        </div>
        <Modal
            btnActiv={btnActiv}
            setBtnActiv={setBtnActiv}
        />
            <RightBlock 
                btnActiv={btnActiv}
                setBtnActiv={setBtnActiv}
                data={foot}
            />

        </div>
     );
    }
    
    export default PageOne;