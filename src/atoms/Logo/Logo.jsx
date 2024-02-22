import classes from './Logo.module.css'

const Logo = () => {

    return (
        <div className={classes.meteor_div}>
            <i class="fa-solid fa-meteor"></i>
            <h4 className={classes.h4}><span>meteor</span> <span className={classes.meteor}>shop.com</span></h4>
        </div>
    );
}

export { Logo };