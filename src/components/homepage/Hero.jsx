import styles from '@/components/homepage/home.module.css'
import Image from 'next/image';
import Link from 'next/link';
const Hero = () => {
  return (
    <>
    <div className={styles.hero}>
      <Image src="/hero-image.webp" alt='Home Hero Banner' priority='fasle' width={1500} height={400}></Image>
    </div>
    </>
  )
}

export default Hero;