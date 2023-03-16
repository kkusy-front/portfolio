"use client";
import React, { useState } from 'react'
import axios from 'axios';


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
                    'Thank you, your message has been submitted.',
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
                            <form onSubmit={handleOnSubmit} className='contact__form'>
                                <div className="form__group">
                                    <label htmlFor="email" >Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="_replyto"
                                        onChange={handleOnChange}
                                        required
                                        value={inputs.email}
                                    />
                                </div>
                                <div className="form__group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        onChange={handleOnChange}
                                        required
                                        value={inputs.message}
                                    /></div>

                                <button type="submit" disabled={status.submitting}>
                                    {!status.submitting
                                        ? !status.submitted
                                            ? 'Wyślij'
                                            : 'Wysłano'
                                        : 'Wysyłanie...'}
                                </button>
                                {status.info.error && (
                                    <p className="status--error">{status.info.msg}</p>
                                )}
                                {!status.info.error && status.info.msg && <p className="status--success">{status.info.msg}</p>}
                            </form>
                            <div>obrazek</div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact