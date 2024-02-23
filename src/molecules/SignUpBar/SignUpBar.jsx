import { NavLink } from 'react-router-dom';
import classes from './SignUpBar.module.css'

const SignUpBar = () => {

    return (
        <div className={classes.Sign_div}>
            <NavLink to={'/sign-up'}><button className={classes.button}>Sign Up</button></NavLink>
            <button className={classes.button}>Log In</button>
        </div>
    );
}

export { SignUpBar };