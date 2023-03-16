"use client";
import React, { useState } from 'react'
import axios from 'axios';

import contactImg from '../../assets/img/contact.svg'
import Image from 'next/image';

type StatusProp = {
    submitted: boolean,
    submitting: boolean,
    info: {
        error: boolean,
        msg: string | null,
    }
}

const Contact = () => {
    const [status, setStatus] = useState<StatusProp>({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });

    const [inputs, setInputs] = useState({
        email: '',
        message: '',
        name: '',
    });

    const handleServerResponse = (ok: boolean, msg: string) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            });
            setInputs({
                email: '',
                message: '',
                name: ''
            });
        } else {
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: msg },
            });
        }
    };
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        });
    };
    const handleOnSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
            method: 'POST',
            url: 'https://formspree.io/f/mrgvldrn',
            data: inputs,
        })
            .then((response) => {
                handleServerResponse(
                    true,
                    'Wiadomość została wysłana. Dziękuje.',
                );
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error);
            });
    };

    return (
        <>
            <section className='contact' id="contact">
                <div className="container">
                    <div className="contact__container">
                        <h2 className='section__heading'>Kontakt</h2>
                        <div className="contact__body">
                            <form onSubmit={handleOnSubmit} >
                                <fieldset className='form'>
                                    <div className="form__group">
                                        <label htmlFor="name" className='form__label'>Imię</label>
                                        <input
                                            id="name"
                                            type="name"
                                            name="name"
                                            className='form__input'
                                            onChange={handleOnChange}
                                            required
                                            value={inputs.name}
                                            placeholder="Twoje Imię"
                                        />
                                    </div>
                                    <div className="form__group">
                                        <label htmlFor="email" className='form__label'>Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="_replyto"
                                            className='form__input'
                                            onChange={handleOnChange}
                                            required
                                            value={inputs.email}
                                            placeholder="Twój adres Email"
                                        />
                                    </div>
                                    <div className="form__group">
                                        <label htmlFor="message" className='form__label'>Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className='form__input form__input--area'
                                            onChange={handleOnChange}
                                            required
                                            value={inputs.message}
                                            placeholder="Twoja wiadomość"
                                            rows={4}
                                        />
                                    </div>
                                    <div>
                                        <button type="submit" disabled={status.submitting} className='form__btn'>
                                            {!status.submitting
                                                ? !status.submitted
                                                    ? 'Wyślij'
                                                    : 'Wysłano'
                                                : 'Wysyłanie...'}
                                        </button>
                                    </div>

                                    {status.info.error && (
                                        <p className="status status--error">{status.info.msg}</p>
                                    )}
                                    {!status.info.error && status.info.msg && <p className="status status--success">{status.info.msg}</p>}
                                </fieldset>
                            </form>
                            <Image src={contactImg} className='form__image' alt='' />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact