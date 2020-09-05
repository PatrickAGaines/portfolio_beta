import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const Contact = () => {

    const { contact, setContact } = useContext(MyContext);

    const toggleContact = () => {
        setContact(!contact);
    }

    return(
        <div className="dialog-background text-center">
            <h2 onClick={toggleContact}>Hello</h2>
        </div>
    )
}

export default Contact;