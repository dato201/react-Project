import { Logo } from '../../atoms/Logo/Logo';
import { SignUpBar } from '../../molecules/SignUpBar/SignUpBar';
import { Nav } from '../../molecules/nav/nav';
import classes from './Header.module.css';

const Header = () => {

  return (
    <header className={classes.Header}>
      <div className={classes.div}>
        <Logo />
        <Nav />
      </div>
      <SignUpBar />
    </header>
  );
}

export { Header };