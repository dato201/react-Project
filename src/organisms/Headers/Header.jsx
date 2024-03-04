import { Logo } from '../../atoms/Logo/Logo';
import { SignUpBar } from '../../molecules/SignUpBar/SignUpBar';
import { Nav } from '../../molecules/nav/nav';
import classes from './Header.module.css';
// import { Cart } from '../../molecules/Cart/Cart';

const Header = () => {

  return (
    <header className={classes.Header}>
      <div className={classes.div}>
        <Logo />
        <Nav />
      </div>
      {/* <Cart /> */}
      <SignUpBar />
    </header>
  );
}

export { Header };