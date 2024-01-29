import Image from "next/image";
import Link from "next/link";
import styles from "@/components/homepage/home.module.css";
const Explorelinks2 = () => {
    const explorelinks2 = [
        {
            img: '/cat-explore7.jpg',
            title : 'Combos',
            path: '/category'
        },
        {
            img: '/cat-explore8.jpg',
            title : 'Christmass',
            path: '/category'
        },
        {
            img: '/cat-explore9.jpg',
            title : 'Flowers',
            path: '/category'
        },
        {
            img: '/cat-explore10.jpg',
            title : 'Birthday',
            path: '/category'
        },
        {
            img: '/cat-explore11.jpg',
            title : 'Plant',
            path: '/category'
        },
        {
            img: '/cat-explore12.jpg',
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