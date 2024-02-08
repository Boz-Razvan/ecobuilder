import React from 'react';
import './css/Contact.css';

const Contact = () => {
    return (
        <div className='contact-page' style={{ marginTop: "135px" }}>
            <div className='contact-wrapper'>
                <div>
                    <div>
                        <div style={{ width: '400px', height: '300px', border:"4px solid #4CAF50", boxShadow:"3px 3px 3px #0b7718" }}>
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                                src="https://maps.google.com/maps?q=octav onicescu, botosai&t=&z=18&ie=UTF8&iwloc=&output=embed"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                    <div>
                        <br></br>
                        <br></br>
                        <p>Telefon: 023 158 4026</p>
                        <p>Email: ecobuilder11d@gmail.com</p>
                        <p>Adresa: România , Jud Botoșani , Str Bucovina nr 33</p>
                    </div>
                </div>
                <div>
                    <h2>Contactati-ne</h2>
                    <form className='contact-form'>
                        <label>
                            Nume:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" />
                        </label>
                        <label>
                            Mesaj:
                            <textarea name="message"></textarea>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;