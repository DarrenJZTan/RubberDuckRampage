import * as styles from './RdrBox.css'
import RdrLink from './RdrLink';

const RdrBox = ({ title, content, link, linkTo }) => {
  return (
    <div className={styles.boxSetting}>
      <h1 className={styles.boxTitle}>{title}</h1>
      <p className={styles.boxPara}>{content}</p>
      {link && (<div className={styles.boxButton}>
        <RdrLink to={linkTo}>{link}</RdrLink>
      </div>
      )}
    </div>
  )
}

export default RdrBox