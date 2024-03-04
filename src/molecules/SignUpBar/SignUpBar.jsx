import { NavLink, useNavigate } from 'react-router-dom';
import classes from './SignUpBar.module.css'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../atoms/store/model/selectors/user/userSelectors';

const SignUpBar = () => {
    const { t, i18n } = useTranslation();

    const user = useSelector(getUser);
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(userActions.logOut())
    }

    if (user) {
        return (
            <div className={classes.HeaderAuthBar}>
                <div className={classes.avatarContainer}>
                    <Avatar
                        label={`${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`}
                        size="xlarge"
                        shape="circle"
                    />
                    <span>{user.firstName} {user.lastName}</span>
                </div>
                <Button onClick={logOut}>Log out</Button>
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