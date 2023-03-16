import Link from "next/link";

type Links = {
    text: string,
    href: string,
    active: boolean
}

const NavItem = ({ text, href, active }: Links) => {
    return (
        <Link href={href} legacyBehavior>
            <a className={`nav__item ${active ? "active" : ""}`} aria-current={active}>{text}</a>
        </Link>
    );
};

export default NavItem;