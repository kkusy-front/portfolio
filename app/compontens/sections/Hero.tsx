import React from 'react'
import Image from 'next/image'
import heroImg from '../../assets/img/heroImg.svg'

export default function Hero() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero__container">
                        <div className="hero__heading">
                            <h2>Stwórzmy <span className='color-primary'>razem</span> stronę dla Twojego biznesu</h2>
                        </div>
                        <div className="hero__image">
                            <figure><Image src={heroImg} alt="" fill /></figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
