import { Link} from "react-router-dom"

import { NavTop } from './style'
import { BsCartFill } from 'react-icons/all'

function Nav() {
    return (
        <NavTop>
            <span>LOGO</span>
            <Link to='/cart'>
                <BsCartFill color='#fff' size={30}/>
            </Link>
        </NavTop>
    )
}

export default Nav