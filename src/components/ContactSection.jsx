import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactImage from '../assets/images/contact-me.svg'; // Adjust path as needed

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_rt5ii6d', // Replace with your EmailJS service ID
      'template_9jjzjst', // Replace with your EmailJS template ID
      form.current,
      '_x4NrzWhEi7F9iuZQ' // Replace with your EmailJS public key
    )
    .then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section id='contact' className="max-w-screen-xl mx-auto px-4 pb-12">
      <h2 className="text-3xl sm:text-[40px] bg-[#ffff] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md">
        Let's Connect
      </h2>
      <div className="flex flex-col md:flex-row items-center mt-10 gap-8">
        <div className="w-full md:w-1/2">
          <img src={contactImage} alt="Contact illustration" className="w-full max-w-md mx-auto" />
        </div>
        <form 
          ref={form} 
          onSubmit={sendEmail}
          className="w-full md:w-1/2"
          name="contactUS"
        >
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <div className="relative mb-4">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="name"
              name="user_name"
              className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5"
              placeholder="Enter your name"
              required
            />
          </div>
          
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Email
          </label>
          <div className="relative mb-4">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path
                  d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
                />
                <path
                  d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
                />
              </svg>
            </div>
            <input
              type="email"
              id="email"
              name="user_email"
              className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5"
              placeholder="name@procodrr.com"
              required
            />
          </div>
          
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Message
          </label>
          <div className="relative mb-4">
            <textarea
              id="message"
              name="message"
              rows="8"
              className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full p-2.5"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full text-white bg-[#1788ae] hover:bg-[#1280a4] focus:ring-4 focus:ring-[#4489a0] font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;