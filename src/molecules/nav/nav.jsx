import { useTranslation } from 'react-i18next';
import { AppLink } from '../../atoms/AppLink/AppLink';
import classes from './Nav.module.css';


const Nav = () => {
  const { t, i18n } = useTranslation();


    return (
        <nav>
            <ul className={classes.nav}>
                <li className={classes.li}><AppLink className={classes.a} to={'/'}>{t('Home')}</AppLink></li>
                <li className={classes.li}><AppLink className={classes.a} to={'/products'}>{t('Products')}</AppLink></li>
                <li className={classes.li}><AppLink className={classes.a} to={'/about-us'}>{t('About Us')}</AppLink></li>
            </ul>
        </nav>
    );
}

export { Nav };