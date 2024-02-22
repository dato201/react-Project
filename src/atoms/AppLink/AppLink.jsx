import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import classes from './AppLink.module.css'

const AppLink = (props) => {
    const {
        to,
        children
      } = props;

    return (
        <NavLink className={classes.AppLink} to={to}>{children}</NavLink>
    );
}

AppLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.element,
}

export { AppLink }