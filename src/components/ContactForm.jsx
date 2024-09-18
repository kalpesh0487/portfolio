import React, { useState } from 'react';
import { BsInstagram } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { AiOutlineCopy } from 'react-icons/ai';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Reached here", formData);
    try {
      const response = await fetch(`https://my-portfolio-backend-sooty.vercel.app/message`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      const dataResponse = await response.json();
      console.log("Response from server:", dataResponse);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message.');
    }
  };
  

  return (
    <div>
    <div className="flex items-center justify-center w-full h-screen bg-black">
      <div className="w-full max-w-md p-4  rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center text-slate-200"><span className='masked'>Contact Me</span></h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-200">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='John Doe'
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-black text-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-200">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='john@gmail.com'
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-black text-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-200">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder='Please enter a subject'
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 bg-black text-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-200">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder='Please enter a message'
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 bg-black text-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#1456CE] to-[#D51E61] text-white px-6 py-3 rounded-md hover:scale-105 transition-all  duration-300 ease-in-out w-full"
          >
            Send Message
          </button>
        </form>
      </div>
      
    </div>
    <div className='flex items-center justify-center  px-10 pt-10 gap-5 bg-black h-full p-10' >
          {/* <a href="https://www.x.com//" className='text-white hover:text-blue-700 rounded-full'><ImTwitter size={30}/></a> */}
          <a href="https://leetcode.com/u/desaikalpesh2003/" className='text-white hover:bg-black hover:text-yellow-400 rounded-full ' ><SiLeetcode size={30} /></a>
          <a href="https://www.linkedin.com/in/kalpesh-desai-a4b713212/" className='text-white hover:text-blue-400 rounded-full' ><IoLogoLinkedin size={30} /></a>
          <a href="https://github.com/kalpesh0487" className='text-white hover:bg-white hover:text-black rounded-full ' ><FaGithub size={30} /></a>
          <a href="https://www.instagram.com/" className='text-white hover:text-pink-700 rounded-full ' ><BsInstagram size={30} /></a>
        </div>
        </div>
  );
};

export default ContactForm;
