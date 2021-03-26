import PageThereRIght from '../../page3-right'
import FootDishesBlock from '../../page3-right/footdishes'
import Button from '../../../components/page1-block/button'

import { Link, Route, Switch } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'


const Page3Component = () => {
    const [menuLink, setMenuLink] = useState('')
    return ( 
        <div className="page3-inner-right">
                <PageThereRIght 
                    
                 />
                <div className="setting-link">
                    <Link
                        onClick={() => setMenuLink ('Hot') } 
                        to="/PageThere/Appereance/food-dishes" 
                        className={`setting-links ${menuLink == 'Hot' ? 'activ' : ''}`}>Hot Dishes
                     </Link>
                    <Link
                     onClick={() => setMenuLink ('Dishes') } 
                        to="/PageThere/Appereance/Dishes" 
                        className={`setting-links ${menuLink == 'Dishes' ? 'activ' : ''}`}>Cold Dishes
                     </Link>
                    <Link
                     onClick={() => setMenuLink ('Soup') } 
                        to="/PageThere/Appereance/Soup" 
                        className={`setting-links ${menuLink == 'Soup' ? 'activ' : ''}`}>Soup
                     </Link>
                    <Link className="setting-links">
                        Grill
                     </Link>
                    <Link className="setting-links">
                        Appetizer
                     </Link>
                    <Link className="setting-links">
                        Dessert
                     </Link>
                </div>
                <div className="food-dishes">
                    <FootDishesBlock
                        menuLink={menuLink}
                        setMenuLink={setMenuLink}
                    />
                </div>
                <div className="double-btn">
                    <Button
                        text={'Discard Changes'}
                    />
                    <Button
                        text={'Save Changes'}
                    />
                </div>
                
            </div>
     );
}
 
export default Page3Component;