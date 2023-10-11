import * as styles from './Header.css';
import logoImg from '../../assets/images/rubberduck-icon.png'
import useAuth from '../../hooks/useAuth'
import RdrIconButton from '../common/RdrIconButton';
import RdrButton from '../common/RdrIconButton';
import RdrLink from '../common/RdrLink';
import useChangeTheme from '../../hooks/useChangeTheme'

import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from "react-bootstrap";
import { RiShoppingCartFill } from 'react-icons/ri';
import { PiMoonFill, PiMoonLight } from 'react-icons/pi'

const Header = () => {
  // ACCESS VARIABLES FROM HOOKS
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useChangeTheme();
  const variant = theme === 'light' ? 'light' : 'dark';

  return (
    <Navbar className={styles.navbar} variant={variant} expand="lg">
      <Container>
        <Navbar.Brand className={styles.brandLink} as={Link} to='/'>
          <img className={styles.logo} src={logoImg} alt="rubberduck rampage logo" />
          <div className={styles.logoTextBox}>
            <span className={styles.brand}>Rubberduck Rampage</span>
            <span className={styles.brandSub}>The Official Online Store</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          {/* STANDARD NAVLINKS */}
          <Nav className={`me-auto ${styles.nav}`}>
            <Nav.Link className={styles.navLink} as={Link} to='/store/products'>Products</Nav.Link>
          </Nav>
          {/* AUTH NAVLINKS */}
          <Nav >
            {!user && <RdrLink to='/signup'>Sign&nbsp;Up</RdrLink>}
            {!user && <RdrLink to="/login"  >Log&nbsp;In</RdrLink>}
            {user && <RdrLink to="/dashboard" >Dashboard</RdrLink>}
            {user && <RdrButton onClick={() => { logout() }} outline navbar>Logout</RdrButton>}
            {<RdrIconButton><RiShoppingCartFill /></RdrIconButton>}
            {<RdrIconButton onClick={ toggleTheme }>{theme === 'light' ? <PiMoonFill /> : <PiMoonLight />}</RdrIconButton>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
