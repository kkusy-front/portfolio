import Link from "next/link";

type Links = {
    text: string,
    href: string,
    active: boolean
}

const NavItem = ({ text, href, active }: Links) => {
    return (
        <Link href={href} className={`nav__item ${active ? "active" : ""}`}>
            {text}
        </Link>
    );
};

export default NavItem;