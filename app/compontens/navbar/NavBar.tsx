"use client";
import React, { useRef, useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import NavItem from "./NavItem";
import Logo from '../../assets/img/logo.png'

import useOnClickOutside from "@/app/hooks/useOnClickOutside";


const MENU_LIST: { text: string, href: string }[] = [
    { text: "Strona główna", href: "/" },
    { text: "O mnie", href: "/#about" },
    { text: "Projekty", href: "/#projects" },
    { text: "Kontakt", href: "/#kontakt" },
];

export default function NavBar() {
    const [navActive, setNavActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);
    const headerRef = useRef<HTMLDivElement>(null);

    const clickOutsidehandler = () => {
        setNavActive(false)
    };
    useOnClickOutside(headerRef, clickOutsidehandler);


    return (
        <>
            <header className={'header'} ref={headerRef}>
                <nav className="nav">
                    <div className="container">
                        <div className="nav__container">
                            <Link href={"/"}>
                                <Image src={Logo} alt=""
                                    width={100}
                                    height={100} />
                                <h1 className='sr-only'>Kusy-Web</h1>
                            </Link>
                            <div
                                onClick={() => setNavActive(!navActive)}
                                className={`nav__menu-bar ${navActive ? "active" : ""}`}
                            >
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
