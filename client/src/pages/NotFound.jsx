import * as styles from './NotFound.css'
import { Link } from "react-router-dom"
import respawn from "../assets/images/respawn.jpg"

const NotFound = () => {
  return (
    <div className={styles.notFoundBox}>
      <h1 className= {styles.notFoundHeading}>404 Error - The page you were looking for does not exist</h1>
      <div className={styles.twinBox}>
        <img src={respawn} alt="respawn" />
        <Link to="/">Looks like your character got lost in the code labyrinth. Time to activate the respawn button!</Link>
      </div>
    </div>
  )
}

export default NotFound