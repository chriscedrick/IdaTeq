import React from "react";
import applyback from "./images/applyback.jpg"

const Apply = () => {

    return(
        <div className=" bg-cover" style={{backgroundImage: `url(${applyback})`}}>

        <div className="px-10 lg:px-20 lg:pl-[550px] py-20">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe9Y1D_bcS5X0qvEI5MXgxZLdxhOt9VUxzxWLREdapbD3J6mQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0" className="w-full h-screen">Loading…</iframe>
            {/* <div className="block p-10 bg-white" style={{boxShadow: "0px 1px 100px 1px rgba(0, 0, 0, 0.1)" ,borderRadius: "20px"}}>
            
                 <form>
                    <h1 className="text-4xl text-center font-bold text-blue-800 mb-10">APPLICATION FORM</h1>
    
                    <div className="form-group mb-6">
                        <label for="firstname" className="form-label inline-block mb-2 text-black">First Name</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none" id="firstname"
                             placeholder="Enter your first name"/>
                    </div>
                    <div className="form-group mb-6">
                        <label for="lastname" className="form-label inline-block mb-2 text-black">Last Name</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none" id="lastname"
                             placeholder="Enter your last name"/>
                    </div>
                    <div className="form-group mb-6">
                        <label for="gender" className="form-label inline-block mb-2 text-black">Gender</label>
                        <div className="flex justify-start sm:pl-2">
                            <div className="form-check form-check-inline">
                              <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-800 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="male" value="Male"/>
                              <label className="form-check-label inline-block text-gray-800" for="male">Male</label>
                            </div>
                            <div className="form-check form-check-inline pl-10 sm:pl-30">
                              <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-800 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="female" value="Female"/>
                              <label className="form-check-label inline-block text-gray-800" for="female">Female</label>
                            </div>
                          </div>
                    </div>
                    <div className="form-group mb-6">
                        <label for="address" className="form-label inline-block mb-2 text-black">Address</label>
                        <textarea  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none" id="address" rows="1"
                             placeholder="Enter your address"></textarea>
                    </div>
                    <div className="form-group mb-6">
                        <label for="email" className="form-label inline-block mb-2 text-black">Email</label>
                        <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none" id="email"
                            aria-describedby="emailHelp" placeholder="Enter your email"/>
                    </div>
                    <div className="form-group mb-6">
                        <label for="phone" className="form-label inline-block mb-2 text-black">Phone Number</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none" id="phone"
                             placeholder="Enter your number"/>
                    </div>
                    <div className="form-group mb-6">
                        <label for="fieldEducation" className="form-label inline-block mb-2 text-black">Field of Education</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none" id="fieldEducation"
                             placeholder="Enter your field of education"/>
                    </div>
                    <div className="form-group mb-6">
                        <label for="levelEducation" className="form-label inline-block mb-2 text-black">Level of Education</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none" id="levelEducation"
                             placeholder="Enter your level of education"/>
                    </div>
                    <div className="form-group mb-6">
                        <label for="school" className="form-label inline-block mb-2 text-black">School Name</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none" id="school"
                             placeholder="Enter your school name"/>
                    </div>
                    <div className="form-group mb-6">
                        <label for="training" className="form-label inline-block mb-2 text-black">What you like to be trained in</label>
                       
                             <select id="training" className="form-control bg-white bg-clip-padding border border-solid border-gray-300 text-gray-700 text-base font-normal rounded-lg focus:ring-blue-800 focus:border-blue-800 block w-full px-3 p-1.5 focus:outline-none ">
                                <option selected>Choose what you like to be trained in</option>
                                <option value="">UI/UX Design</option>
                                <option value="">Web Development</option>
                                <option value="">Mobile App</option>
                                <option value="">Database</option>
                                <option value="">Cloud</option>
                                <option value="">Networking</option>
                              </select>
                    </div>
                    <div className="text-center">
                    <button type="submit" className="px-4 py-2 bg-blue-800 text-white font-bold text-xl leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg hover:-translate-y-1 hover:scale-110"
                style={{borderRadius: "10px",transition: "all 0.5s ease-in-out"}}>Submit</button>
                    </div>
                </form> 
            </div> */}
        </div>
    
    </div>
    );
};

export default Apply;