import Link from "next/link";

const DynamicLinks=({offMenu})=>{
    const dynamicLinks=[
        {
            title: "Flower",
            path: "/dynamic",
        },
        {
            title: "Combos",
            path: "/dynamic",
        },
        {
            title: "Cakes",
            path: "/dynamic",
        },
        {
            title: "Decoration",
            path: "/dynamic",
        },
        {
            title: "Birthday",
            path: "/dynamic",
        },
        {
            title: "Anniversary",
            path: "/dynamic",
        },
        {
            title: "Plants",
            path: "/dynamic",
        }
    ]
    return(
        <>
        {dynamicLinks.map(elem=>(
            <Link href={elem.path} key={elem.title} onClick={offMenu}>{elem.title}</Link>
        ))}
        </>
    )
}
export default DynamicLinks;