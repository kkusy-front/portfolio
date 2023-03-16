"use client";
import React, { useEffect, useRef } from 'react'

import HeroImage from '../HeroImage';

import gsap from 'gsap';

export default function Hero() {
    const heroImgRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (heroImgRef.current) {
            const elements = heroImgRef.current.children[0] as any;
            const textsOutOfBox = elements?.getElementById('textsComponent');
            const textsInBox = elements?.getElementById('textsInComponent');
            const circle = elements?.getElementById('circleCompontent');

            gsap.set([textsInBox, textsOutOfBox, circle], { autoAlpha: 1 })
            gsap.fromTo(`#textsComponent path`, { fill: '#F2F2F2' }, { duration: 1.5, fill: '#969696', repeat: -1, yoyo: true });
            gsap.fromTo(`#circleCompontent path`, { fill: '#F2F2F2' }, { duration: 1.5, fill: '#969696', repeat: -1, yoyo: true });
            gsap.fromTo(`#textsInComponent path`, { fill: "#d3d3d3" }, { duration: 1.5, fill: '#4d4b4b', repeat: -1, yoyo: true });
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
                                <HeroImage />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
