import './page.scss'
import PageThereLeft from '../containers/page3-left'
import PageTop from '../components/page1-block/pag1-topblock'
import PageThereRIght from '../containers/page3-right'
import NewDishes from '../components/pages3-block/new-dishes'
import FootDishesBlock from '../containers/page3-right/footdishes'
import Button from '../components/page1-block/button'
import Page3Component from '../containers/page3-right/pag3-right-block'
import Carousel from '../components/pages3-block/carousel'



import { Link, Route, Switch } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'

const PageThere = () => {

    const [pageLink, setPageLink] = useState('')
    
    return (
        <div className="page-there">
            <div className="page3-inner-left">
                <PageTop
                    text1="Settings"
                    text2=""
                />
                <div className="pag3">
                    <PageThereLeft
                    pageLink={pageLink} 
                    setPageLink={setPageLink}
                    />

                </div>
            </div>
           <Switch>
               <Route path="/PageThere/Appereance">
                   <>
                       <Page3Component
                          
                       />
                   </>
               </Route>

               <Route path="/PageThere/Restaurant">
                   <>
                       <Carousel
                          
                       />
                   </>
               </Route>
           </Switch>

        </div>
    );
}

export default PageThere;