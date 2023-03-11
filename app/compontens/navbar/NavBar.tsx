"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";


const MENU_LIST: { text: string, href: string }[] = [
    { text: "Strona główna", href: "/" },
    { text: "O mnie", href: "/#about" },
    { text: "Projekty", href: "/#projects" },
    { text: "Kontakt", href: "/#kontakt" },
];

export default function NavBar() {
    const [navActive, setNavActive] = useState(true);
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <>
            <header className={'header'}>
                <nav className="nav">
                    <div className="container">
                        <div className="nav__container">
                            <Link href={"/"}>
                                <h1 className={'nav__logo'}>Kusy-Web</h1>
                            </Link>
                            <div
                                onClick={() => setNavActive(!navActive)}
                                className={"nav__menu-bar"}
                            >
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <ul className={`nav__menu-list ${navActive ? "active" : ""}`}>
                                {MENU_LIST.map((menu, idx) => (
                                    <li
                                        onClick={() => {
                                            setActiveIdx(idx);
                                            setNavActive(false);
                                        }}
                                        key={menu.text}
                                    >
                                        <NavItem active={activeIdx === idx} {...menu} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
