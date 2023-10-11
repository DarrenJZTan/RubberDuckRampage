import * as styles from './RdrLoader.css'
import Spinner from 'react-bootstrap/Spinner'

function RdrLoader() {
  return (
    <div className={styles.loadingBox}>
      <Spinner 
        className={styles.loadingSpinner} 
        animation="border" 
      />
    </div>
  )
}

export default RdrLoader