import styles from '@/components/homepage/home.module.css';
import Image from 'next/image';
import AgesLinks from './AgesLinks';
const AgeNumber = ({slider, rightClick , leftClick}) => {
  return (
    <>
     <div className={styles.homeCategory1}>
      <h2>Age Is Just A Number </h2>
      <p>Gifts as awesome as their age</p>
      <div className={styles.ageSliderWrapper}>
        <Image src="/chevron-left.svg" height={30} width={30} alt='left age slide' unoptimized priority="false" onClick={leftClick}></Image>
        <div className={styles.ageSlider} ref={slider}>
         <AgesLinks/>
        </div>
        <Image src="/chevron-right.svg" height={30} width={30} alt='right age slide' unoptimized priority="false" onClick={rightClick}></Image>
      </div>
     </div>
    </>
  )
}

export default AgeNumber