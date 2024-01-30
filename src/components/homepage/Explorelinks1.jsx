import Image from "next/image";
import Link from "next/link";
import styles from "@/components/homepage/home.module.css"
const Explorelinks1 = () => {
    const explorelinks1 = [
        {
            img: '/cat-explore1.webp',
            title : 'Birthday',
            path: '/category'
        },
        {
            img: '/cat-explore2.webp',
            title : 'Kids',
            path: '/category'
        },
        {
            img: '/cat-explore3.webp',
            title : 'Dinner',
            path: '/category'
        },
        {
            img: '/cat-explore4.webp',
            title : 'Festival',
            path: '/category'
        },
        {
            img: '/cat-explore5.webp',
            title : 'Wedding Decoration',
            path: '/category'
        },
        {
            img: '/cat-explore6.webp',
            title : 'Balloons',
            path: '/category'
        }
    ];
  return (
    <>
     {explorelinks1.map(elem=>(
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

export default Explorelinks1;