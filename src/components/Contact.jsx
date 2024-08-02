import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xrbzzawk");
    if (state.succeeded) {
        return alert('Thank you!! I will reach out to you shortly')
    }
    return (
        <div className='w-full  mb-10 md:mb-0 p-4 md:flex justify-center'>
        <div className='md:w-1/3'>
            <h3 className="text-4xl font-semibold mb-4 font-sans">Get In Touch</h3>
            <p className="text-gray-800 mb-6 text-4xl font-sans">
            I'm always interested in hearing about new projects, so if you'd like
            to chat, please get in touch.
            </p>
        </div>
        <form onSubmit={handleSubmit} className=''>
        <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full mb-2 rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
            required
        />
        <ValidationError 
            prefix='Name'
            field='name'
            errors={state.errors}
        />
        <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full mb-2  rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
            required
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <textarea
            name="message"
            placeholder="Your Message"
            className="w-full mb-2 rounded-md h-24 border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
            required
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 transition ease-in-out duration-500"
            disabled={state.submitting}
        >
            Send Message
        </button>
        </form>
        </div>
    )
}

export default Contact;