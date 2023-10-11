import PropTypes from 'prop-types'
import * as styles from './RdrIconButton.css'

const RdrButton = ({ children, loadingState, onClick, outline, navbar }) => {
  return (
    <button 
      className={styles.button}
      type={onClick ? "button" : "submit"} 
      onClick={onClick}
      disabled={loadingState ? 1 : 0}
      outline={outline ? 1 : 0}
      navbar={navbar ? 1 : 0}
    >
      {children}
    </button>
  )
}

RdrButton.propTypes = {
  children: PropTypes.any,
  loadingState: PropTypes.bool,
  outline: PropTypes.bool,
  navbar: PropTypes.bool,
  type: PropTypes.string,
}

export default RdrButton