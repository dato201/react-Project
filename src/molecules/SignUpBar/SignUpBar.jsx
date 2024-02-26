import { NavLink } from 'react-router-dom';
import classes from './SignUpBar.module.css'
import { useTranslation } from 'react-i18next';

const SignUpBar = () => {
  const { t, i18n } = useTranslation();

    return (
        <div className={classes.Sign_div}>
            <NavLink to={'/sign-up'}><button className={classes.button}>{t('Sign Up')}</button></NavLink>
            <button className={classes.button}>{t('Log In')}</button>
        </div>
    );
}

export { SignUpBar };