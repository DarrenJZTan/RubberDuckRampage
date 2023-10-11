import { Link } from 'react-router-dom';
import * as styles from './RdrLink.css'

const RdrLink = ({ to, children, outline, navbar }) => {
  return (
    <Link 
      className={styles.navlink}
      to={to}
      // HTML CONTROL: Below needs to evaluate to a number of 1 or 0.  Otherwise, evaluates to a "string" of "true" or "false", which causes an error when read to the DOM.
      outline={outline ? 1 : 0}
      navbar={navbar ? 1 : 0}
    >
      {children}
    </Link>
  )
}

export default RdrLink