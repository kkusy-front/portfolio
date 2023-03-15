"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';

const Footer = () => {
    const [year, setYear] = useState<number>(2023);
    useEffect(() => {
        const date = new Date().getFullYear();
        setYear(date)
    }, [])

    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__container">
                    <div className="footer__top">
                        <div className="footer__icons">
                            <Link href="https://www.linkedin.com/in/krystian-kusy-b20892259/" target='_blank' rel='noopener'><Image src={linkedin} width={30} height={30} alt="Otwórz mój Linkedin" /></Link>
                        </div>
                        <div className="footer__icons">
                            <Link href="https://github.com/kkusy-front" target='_blank' rel='noopener'><Image src={github} width={30} height={30} alt="Otwórz mój github" /></Link>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <span>{year}</span> @ Krystian Kusy
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer