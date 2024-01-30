import Image from "next/image";
import Link from "next/link";
import styles from "@/components/homepage/home.module.css";
const Explorelinks2 = () => {
    const explorelinks2 = [
        {
            img: '/cat-explore7.webp',
            title : 'Combos',
            path: '/category'
        },
        {
            img: '/cat-explore8.webp',
            title : 'Christmass',
            path: '/category'
        },
        {
            img: '/cat-explore9.webp',
            title : 'Flowers',
            path: '/category'
        },
        {
            img: '/cat-explore10.webp',
            title : 'Birthday',
            path: '/category'
        },
        {
            img: '/cat-explore11.webp',
            title : 'Plant',
            path: '/category'
        },
        {
            img: '/cat-explore12.webp',
            title : 'Party',
            path: '/category'
        }
    ];
  return (
    <>
        {explorelinks2.map(elem=>(
      <Link href={elem.path} key={elem.title}>
        <div className={styles.img_hldr}>
        <Image src={elem.img} height={200} width={200} alt="explore category images"></Image>
        </div>
        <span>{elem.title}</span>
      </Link>
     ))}
    </>
  )
}

export default Explorelinks2