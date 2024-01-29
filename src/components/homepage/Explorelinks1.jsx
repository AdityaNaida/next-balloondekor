import Image from "next/image";
import Link from "next/link";
import styles from "@/components/homepage/home.module.css"
const Explorelinks1 = () => {
    const explorelinks1 = [
        {
            img: '/cat-explore1.jpg',
            title : 'Birthday',
            path: '/category'
        },
        {
            img: '/cat-explore2.jpg',
            title : 'Kids',
            path: '/category'
        },
        {
            img: '/cat-explore3.jpg',
            title : 'Dinner',
            path: '/category'
        },
        {
            img: '/cat-explore4.jpg',
            title : 'Festival',
            path: '/category'
        },
        {
            img: '/cat-explore5.jpg',
            title : 'Wedding Decoration',
            path: '/category'
        },
        {
            img: '/cat-explore6.jpg',
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