import './leftblock.scss'

import Button from '../../components/leftBlock-button'
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
} from '../../images/icon/Icon.js'

import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const LeftBlock = () => {

    const [linkClick, setLinkClick] = useState('')

    return (
        <div className="LeftBlock">

            <Link >
                <Button
                    icon={<Home />}
                />
            </Link>

            <Link to='/PageOne' onClick={() => setLinkClick('PageOne')}>
                <Button
                    active={linkClick === 'PageOne'}
                    className={`header-logotip ${linkClick == 'PageOne' ? 'activ' : ''}`}

                    icon={<Page1 />}

                />
            </Link>




            <Button
                icon={<Page2 />}

            />

            <Link to='/PageTwo' onClick={() => setLinkClick('PageTwo')}>
                <Button
                    active={linkClick === 'PageTwo'}
                    icon={<Page3 />}
                    className={`header-logotip ${linkClick == 'PageTwo' ? 'activ' : ''}`} />
            </Link>


            <Button
                icon={<Page4 />}

            />

            <Button
                icon={<Page5 />}

            />

            <Link to='/PageThere' onClick={() => setLinkClick('PageThere')}>
                <Button
                    active={linkClick === 'PageThere'}
                    className={`header-logotip ${linkClick == 'PageThere' ? 'activ' : ''}`}

                    icon={<Page6 />}

                />
            </Link>

            <Button
                icon={<Page7 />}

            />
        </div>
    );
}

export default LeftBlock;