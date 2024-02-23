import classes from './MasterTemplate.module.css';
import PropTypes from 'prop-types'

const MasterTemplate = (props) => {
    const {
        Header,
        children,
      }  = props;

    return (
        <div>
            {Header}
            {children}
        </div>
    );
}

MasterTemplate.propTypes = {
    Header: PropTypes.element,
    children: PropTypes.element
}

export { MasterTemplate };