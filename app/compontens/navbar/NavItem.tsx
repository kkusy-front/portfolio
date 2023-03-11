import Link from "next/link";


interface Links {
    text: string,
    href: string,
    active: boolean
}
const NavItem = ({ text, href, active }: Links) => {
    console.log(active)
    return (
        <Link href={href} className={`nav__item ${active ? "active" : ""}`}>
            {text}
        </Link>
    );
};

export default NavItem;