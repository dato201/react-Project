import { Logo } from '../../atoms/Logo/Logo';
import { Nav } from '../../molecules/nav/nav';
import classes from './Header.module.css'

const Header = () => {
  
    return (
      <header className={classes.Header}>
        <Logo />
        <Nav />
      </header>
    );
}

export { Header };