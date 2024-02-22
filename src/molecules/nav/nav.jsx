import { AppLink } from '../../atoms/AppLink/AppLink';
import classes from './Nav.module.css';


const Nav = () => {

    return (
        <nav>
            <ul className={classes.nav}>
                <li><AppLink to={'/'}>home</AppLink></li>
                <li><AppLink to={'/'}>Products</AppLink></li>
                <li><AppLink to={'/'}>About Us</AppLink></li>
            </ul>
        </nav>
    );
}

export { Nav };