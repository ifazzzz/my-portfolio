import React from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_oyioj1s', 'template_syyilfp', e.target, 'DpLROoe77W7bqclfz')
          .then((result) => {
              console.log(result.text);
              e.target.reset()
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className="container mx-auto text-white">
            <h1 className="text-2xl font-bold text-center my-6">Contact Me</h1>
            <form onSubmit={sendEmail} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                <label className="block">
                    <span className="mb-1">Full name</span>
                    <input type="text" name="name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-600 bg-gray-100" />
                </label>
                <label className="block">
                    <span className="mb-1">Email address</span>
                    <input type="email" name="to" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-primary bg-gray-100" />
                </label>
                <label className="block">
                    <span className="mb-1">Message</span>
                    <textarea rows="3" name="message" className="text-neutral block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-primary bg-gray-100"></textarea>
                </label>
                <button type="submit" className="w-full self-center px-8 py-2 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primary text-gray-50 focus:ring-primary hover:ring-primary">Send Email</button>
		    </form>
        </div>
    );
};

export default Contact;