import React, { useRef } from 'react';
import contactback from "./images/contactback.jpg"
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vo742s4', 'template_96aa32s', form.current, '1aA-zE1mt_cvdSsAm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      toast.success('Sent Successfully!', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
  };


    return(
        <div className="md:bg-cover bg-contain" style={{ backgroundImage: `url(${contactback})`}}>

        <div className="px-2 md:px-20 py-10 lg:py-28">
            <div className="block p-7 bg-white max-w-sm " style={{boxShadow: "0px 1px 100px 1px rgba(0, 0, 0, 0.1)" , borderRadius: "20px"}}>
    
                <form ref={form} onSubmit={sendEmail}>
                    <h1 className="text-2xl md:text-4xl text-center font-bold text-blue-800 mb-10 animate__animated animate__pulse">CONTACT US</h1>
                    <div className="form-group mb-6">
                        {/* <label for="email" className="form-label inline-block mb-2 text-black">Email
                            address</label>  */}
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-blue-800" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64z" />
                                </svg>
                            </div>
                            <input type="email"
                                className="form-control block w-full pl-10 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none"
                                id="email" aria-describedby="emailHelp" placeholder="Enter your email" name="email" required/>
                        </div>
                    </div>
    
                    <div className="form-group mb-6">
                        {/*  <label for="phone" className="form-label inline-block mb-2 text-black">Phone
                            Number</label> */}
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-blue-800" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                </svg>
                            </div>
                            <input type="text"
                                className="form-control block w-full pl-10 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none"
                                id="phone" placeholder="Enter your number" name="phone" required/>
                        </div>
                    </div>
                    <div className="form-group mb-6">
                        {/* <label for="message" className="form-label inline-block mb-2 text-black">Message</label>
                        */}
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-blue-800" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z" />
                                </svg>
                            </div>
                            <textarea
                                className="form-control block w-full pl-10 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none"
                                id="message" rows="4" placeholder="Write your message here" name="message" required></textarea>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit"
                            className="px-4 py-2 bg-blue-800 text-white font-bold text-xl leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg hover:-translate-y-1 hover:scale-110 "
                            style={{borderRadius: "10px 0px",transition: "all 0.3s ease-out"}}>Send</button>
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </div>
    
    </div>
    );
};

export default Contact;