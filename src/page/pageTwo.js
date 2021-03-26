import './page.scss'
import PageTop from '../components/page1-block/pag1-topblock'
import Deshboard from '../components/pages2-block/card-block/card'
import Dollor from '../images/icon/dollor.svg'
import Aue from '../images/icon/Icon/Line/aue.svg'
import Person from '../images/icon/person.svg'
import OrderPersonal from '../components/pages2-block/order-personal'
import TextButton from '../components/pages2-block/text-button-block'
import FootBlock from '../components/pages2-block/foot-block'
import Button from '../components/page1-block/button'
import Progres from '../images/icon/progres.svg'
import ProgresItem from '../components/pages2-block/progres-item'

import { per } from '../components/array-block/personArr'
import {foot} from '../components/array-block/array'

import React from 'react'
import { Link } from 'react-router-dom'
import ApexCharts from 'apexcharts'
import ApexChartsItem from '../components/pages2-block/apecharts/apecharts'
// import {PersonArr} from '../components/array-block/personArr'

import { useState, useEffect, useRef } from 'react'
import {
    FootItem,
    Dishes,
    Soup
} from '../components/page1-block/foot-item'


const PageTwo = () => {

    
    return (
        <div className="pages-2">
            <div className="page2-left">
                <div className="page-top">
                    <PageTop
                        text1="Dashboard"
                        text2="Tuesday 2 Feb, 2021"
                    />
                </div>
                <div className="page-card">
                    <Deshboard
                        protsent={'+32.40%'}
                        money={'$10,243.00'}
                        info={'Total Revenue'}
                        img={Dollor}
                    />
                    <Deshboard className="red"
                        protsent={'-12.40%'}
                        money={'23,456'}
                        info={'Total Dish Ordered'}
                        img={Aue}
                    />
                    <Deshboard
                        protsent={'+2.40%'}
                        money={'1,234'}
                        info={'Total Customer'}
                        img={Person}
                    />

                </div>

                <div className="order-report">
                        <TextButton
                            text={'Order Report'}
                            button={'Filter Order'}
                        />
                    <div className="order-bottom">
                        <Link className="order-link">Customer</Link>
                        <Link className="order-link">Menu</Link>
                        <Link className="order-link">Total Payment</Link>
                        <Link className="order-link">Status</Link>
                    </div>
                </div>
                <div className="order-personal-block">
                    {
                        per.map((item, index) => (
                            <OrderPersonal
                                key={index}
                                img={item.img}
                                info={item.info}
                                money={item.money}
                                name={item.name}
                                id={item.id}
                                status={item.status}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="page2-right">
                <div className="page-2-top">
                    <div className="page2-right-top">
                        <h1 className="text-today">Most Ordered</h1>
                        <select className="today-select" name="" id="">
                            <option value="">Today</option>
                            <option value="">Today</option>
                            <option value="">Today</option>
                        </select>
                    </div>
                    <div className="foot-blocks">
                    <>
                 {
                    foot.slice(0, 3).map((item,index) => (
                        <FootBlock
                            key={index}
                            img={item.img}
                            name={item.info}
                            dishes={item.bowls}
                            id={item.id}
                        />
                    ))
                }
                 </>
                    </div>
                    <div className="foot-view">
                        <Button 
                            text={'View All'}
                        />
                    </div>
                </div>

                <div className="page-2-bottom">
                <div className="page2-right-top">
                        <h1 className="text-today">Most Type of Order</h1>
                        <select className="today-select" name="" id="">
                            <option value="">Today</option>
                            <option value="">Today</option>
                            <option value="">Today</option>
                        </select>
                    </div>
                    <div className="page-progres protsent">
                        <ApexChartsItem/>
                        <div className="progres-block">
                            <ProgresItem
                                color={'pulpur'}
                                text={'Dine In'}
                                info={'200 customers'}
                            />
                            <ProgresItem
                                color={'orange'}
                                text={'To Go'}
                                info={'122 customers'}
                            />
                            <ProgresItem
                                color={'blue'}
                                text={'Delivery'}
                                info={'264 customers'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageTwo;