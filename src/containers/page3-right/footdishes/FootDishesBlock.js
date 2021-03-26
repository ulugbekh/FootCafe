import './main.scss'
import FootDishesItem from '../../../components/pages3-block/food-dishes'
import {foot} from '../../../components/array-block/array'
import NewDish from '../../../components/pages3-block/new-dishes'
import { Link, Route, Switch } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'

const FootDishesBlock = ({menuLink, setMenuLink}) => {
    return ( 
        <div className='footdishesblock'>
           <Switch>
           <Route path="/PageThere/Appereance/food-dishes">
           <>
               <NewDish
                   text={'Add new dish'}
               />
            {
                foot.slice(1, 4).map((item, index) => (
                    <FootDishesItem
                        img={item.img}
                        info={item.info}
                        money={item.money}
                        bowls={item.bowls}
                    />
                ))
            }
            </>
               </Route>
               <Route path="/PageThere/Appereance/Dishes">
           <>
               <NewDish
                   text={'Add New Soup dish'}
               />
            {
                foot.slice(3, 6).map((item, index) => (
                    <FootDishesItem
                        img={item.img}
                        info={item.info}
                        money={item.money}
                        bowls={item.bowls}
                    />
                ))
            }
            </>
               </Route>

               <Route path="/PageThere/Appereance/Soup">
           <>
               <NewDish
                   text={'Add New Cold dish'}
               />
            {
                foot.slice(1, 9).map((item, index) => (
                    <FootDishesItem
                        img={item.img}
                        info={item.info}
                        money={item.money}
                        bowls={item.bowls}
                    />
                ))
            }
            </>
               </Route>
           </Switch>
        </div>
     );
}
 
export default FootDishesBlock;