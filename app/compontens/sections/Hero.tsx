"use client";
import React, { RefObject, useEffect, useRef } from 'react'
import Image from 'next/image'

import HeroImage from '../HeroImage';

import gsap from 'gsap';

export default function Hero() {
    const heroImgRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        // console.log(Scene)
        if (heroImgRef.current) {
            const elements = heroImgRef.current.children[0] as any;
            const textsOutOfBox = elements?.getElementById('textsComponent');
            const textsInBox = elements?.getElementById('textsInComponent');

            console.log(textsOutOfBox)
            gsap.set([textsInBox, textsOutOfBox], { autoAlpha: 1 })
            gsap.fromTo(`#textsComponent path`, { fill: '#F2F2F2' }, { duration: 1.5, fill: '#E6E6E6', ease: 'power3.in', repeat: -1, yoyo: true })
            gsap.fromTo(`#textsInComponent path`, { fill: "#E6E6E6" }, { duration: 1.5, fill: 'black', ease: 'power3.in', repeat: -1, yoyo: true })




        }

    }, [])

    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero__container">
                        <div className="hero__heading">
                            <h2>Stwórzmy <span className='color-primary'>razem</span> stronę dla Twojego biznesu.</h2>
                        </div>
                        <div className="hero__image">
                            <figure ref={heroImgRef}>
                                {/* <Image src={heroImg} alt="" fill /> */}
                                <HeroImage />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
