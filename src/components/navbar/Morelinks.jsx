import Link from "next/link";
import Image from "next/image";

const MoreLinks=()=>{
    const morelinks=[
        {
            title: "Cart",
            path: "/cart",
            img: "/cart.svg",
            alt: "cart icon"
        },{
            title: "Sign In",
            path: "/signin",
            img: "/sign-in.svg",
            alt: "sign in icon"
        },
        {
            title: "Contact",
            path: "/contact",
            img: "/headphone.webp",
            alt: "contact-icon"
        }
    ]
    return(
        <>
        {morelinks.map(elem=>(
            <Link href={elem.path} key={elem.title}><Image src={elem.img} height={30} width={30} alt={elem.alt}></Image><span>{elem.title}</span></Link>
        ))}
        </>
    )
}

export default MoreLinks;