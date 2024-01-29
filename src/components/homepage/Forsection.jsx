import styles from '@/components/homepage/home.module.css'
import Forsomeone1 from './Forsomeone1'
import Forsomeone2 from './Forsomeone2'
const Forsection = () => {
  return (
    <>
    <div className={styles.homeCategory1}>
     <h2>Celebrate Achivements</h2>
     <p>With our best decoration services.</p>
     <div className={styles.homeCategory1_wrapper}>
    <Forsomeone1 />
    <Forsomeone2 />
     </div>
    </div>
    </>
  )
}

export default Forsection