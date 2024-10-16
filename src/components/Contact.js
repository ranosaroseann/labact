import React, { useState } from 'react';
import './Style.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill out all fields.');
            return;
        }

        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div>
            <h2>CONTACT ME</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                    /><br/><br/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                    /><br/><br/>
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                    /><br/><br/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
