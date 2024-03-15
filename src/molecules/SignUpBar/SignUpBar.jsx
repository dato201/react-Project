import { NavLink, useNavigate } from 'react-router-dom';
import classes from './SignUpBar.module.css'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../atoms/store/model/selectors/user/userSelectors';
import { Avatar } from 'primereact/avatar';

const SignUpBar = () => {
    const { t, i18n } = useTranslation();

    const user = useSelector(getUser);
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(userActions.logOut())
    }
    const user2 = {
        firstName: "tests",
        lastName: "testing",
        email: "test@gmail.com",
        password: "12345678"
    }

    if (user2) {
        return (
            <div className={classes.HeaderAuthBar}>
                <div className={classes.avatarContainer}>
                    <Avatar
                        label={`${user2.firstName[0].toUpperCase()}${user2.lastName[0].toUpperCase()}`}
                        size="xlarge"
                        shape="circle"
                    />
                    <span>{user2.firstName} {user2.lastName}</span>
                </div>
                <button onClick={logOut}>Log out</button>
            </div>
        )
    }
    return (
        <div className={classes.Sign_div}>
            <NavLink to={'/sign-up'}><button className={classes.button}>{t('Sign Up')}</button></NavLink>
            <NavLink to={'/log-in'}><button className={classes.button}>{t('Log In')}</button></NavLink>
        </div>
    );
}

export { SignUpBar };