import * as styles from './Layout.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import useTheme from '../../hooks/useChangeTheme';
import { light, dark } from '../../styles/themes.css';

import Header from "./Header"
import Footer from './Footer'

const Layout = () => {
  const { theme } = useTheme();
  const themeClassName = theme ===  'light' ? light : dark;
  const toastTheme = theme ===  'light' ? "light" : "dark";

  return (
    <div className={ `${styles.app} ${themeClassName}` }>
      <ToastContainer 
        className={styles.toastify}
        style={{ textAlign: "center" }} 
        position='top-center'
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        transition={Slide}
        theme={toastTheme}
      />
      <Header />
      <div className={styles.appContent}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout