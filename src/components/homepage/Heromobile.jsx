import styles from '@/components/homepage/home.module.css';
import Image from 'next/image';
const Heromobile = () => {
  return (
    <div className={styles.hero_mobile}>
      <Image src="/home-mobile.jpg" height={300} width={150} alt='hero mobile image' priority unoptimized></Image>
    </div>
  )
}

export default Heromobile;