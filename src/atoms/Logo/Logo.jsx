import { NavLink } from 'react-router-dom';
import classes from './Logo.module.css'

const Logo = () => {

    return (
        <NavLink to={'/'} className={classes.meteor_div}>
            <i className="fa-solid fa-meteor"></i>
            <h4 className={classes.h4}><span>meteor</span> <span className={classes.meteor}>shop.com</span></h4>
        </NavLink>
    );
}

export { Logo };