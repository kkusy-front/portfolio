"use client";
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import HeroImage from '../HeroImage';

import gsap from 'gsap';

export default function Hero() {
    const heroImgRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        // console.log(Scene)
        if (heroImgRef.current) {
            console.log(heroImgRef.current.children[0])
            const elements = heroImgRef.current.children[0];

            const textsOutOfBox = elements.getElementById('textsComponent');
            const textsInBox = elements.getElementById('textsInComponent');

            gsap.set([textsInBox, textsOutOfBox], { autoAlpha: 0 })

            const tl = gsap.timeline({ defaults: { easy: 'power3.onOut' } });
            tl.fromTo(textsOutOfBox, { opacity: 0 }, { duration: 1.3, opacity: 1, autoAlpha: 1 })
            tl.fromTo(textsOutOfBox, { opacity: 1 }, { duration: 1.3, opacity: 0, autoAlpha: 0 })
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
