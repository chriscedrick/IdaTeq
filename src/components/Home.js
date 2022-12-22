import React from "react";
import home from "./images/home.jpg";
import homeback from "./images/homeback.jpg";
import { Link } from "react-router-dom";
import 'animate.css';

const Home = () =>{

    return(
    <div>
        <div className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{ backgroundPosition: "50%" , backgroundImage: `url(${home})` , height: "500px"}}>
        <div className="absolute top-0 right-0 bottom-0 left-192 overflow-hidden bg-fixed rounded-bl-full"
            style={{backgroundColor: "rgba(255, 255, 255, 0.45)"}}>
            <div className="flex justify-start items-center h-full ml-44 mr-6">
                <div className="text-end text-blue-800 px-6 lg:px-12">
                    <h1 className="text-xl md:text-4xl font-bold mt-0 mb-6 ">Welcome to <span className="block text-7xl animate__animated animate__fadeIn">IDA TEQ</span>
                    </h1>
                    <h3 className="text-base md:text-xl font-normal mb-8">We are a Burundian Social <span className="block">Enterprise, Founded
                            in 2022</span>

                    </h3>
                    <Link to="/apply"><button type="button"
                        className="inline-block px-3 py-2.5 bg-blue-800 text-white font-bold text-lg leading-tight uppercase rounded hover:bg-blue-700 hover:bg-opacity-100 focus:outline-none focus:ring-0 animate__animated animate__tada"
                        data-mdb-ripple="true" data-mdb-ripple-color="light" style={{borderRadius: "15px 0px"}}>
                        APPLY NOW
                    </button></Link>
                </div>
            </div>
        </div>
    </div>

    <div className="text-center lg:text-left bg-white">
        <div className="container p-7 ">
            <div className="grid grid-cols-1 gap-2 lg:gap-4 justify-center items-center lg:grid-cols-3">
                <div className="mb-4 lg:mb-0 md:text-end">
                    <p className="font-bold md:mb-4 uppercase text-xl lg:text-4xl text-blue-800">
                        our mission
                    </p>
                </div>
                <div className="md:mb-4 lg:mb-0 lg:col-span-2 text-md lg:text-base md:text-start">
                    <p className="lg:pr-40">
                        By 2030, We have a mission to create 10 000 jobs and make 500 000 youths, women, refugees and
                        girls from lower income families in Burundi to be software engineers, IoT Technicians and data
                        Scientists.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="relative md:bg-cover bg-contain" style={{backgroundImage: `url(${homeback})`}}>
        <div className="mx-auto max-w-2xl py-2 px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-40">
            <h2 className="sr-only">Programs</h2>
            <h5 className="mb-2 text-xl md:text-3xl font-bold text-blue-800 uppercase text-center">Our ICT Informal Education Programs
            </h5>
            <p className="mb-5 text-base text-black lg:text-base text-center">Our ICT Education Programs aim to support
                Rwandan youth and
                girls from local low-income communities accessing anaffordable learning focusing on general computer
                literacy, coding, data science and internet of thing.</p>
            <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-5 lg:px-16">
                <div className="group aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-white w-full xl:aspect-w-7 xl:aspect-h-8 animate__animated animate__backInLeft"
                    style={{boxShadow: "1px 1px 100px 1px rgba(0, 0, 0, 0.15)" , borderRadius: "50px 0px 0px 0px"}}>
                    <div className="items-center justify-center text-left px-6 py-6 sm:px-12 sm:py-10">
                        <div className="text-xl font-bold uppercase mb-3 sm:mb-7 md:text-3xl text-blue-800">Girls in Code
                        </div>
                        <div className="font-sans text-sm">A program initiated to close the gender gap in
                            technology by focusing on girls and women between 18 -24 years old from low income
                            families and refugees camps.</div>
                        <div className="font-sans text-sm font-medium mt-3 sm:mt-7 text-blue-800 underline sm:text-start text-end"><Link to="/girls">Find
                                More</Link></div>
                    </div>
                </div>
                <div className="group aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-w-7 xl:aspect-h-8 animate__animated animate__backInRight"
                    style={{boxShadow: "1px 1px 100px 1px rgba(0, 0, 0, 0.15)" , borderRadius: "0px 50px 0px 0px"}}>
                    <div className="items-center justify-center text-left px-6 py-6 sm:px-12 sm:py-10">
                        <div className="text-xl font-bold uppercase mb-3 sm:mb-7 sm:text-3xl text-blue-800">aipe</div>
                        <div className="font-sans text-sm">All for inforamtion and programming
                            Educations a program designed to teach youths from low income family and refugee camps
                            aged between 8 to 16 years how to code.</div>
                        <div className="font-sans text-sm font-medium mt-3 sm:mt-7 text-blue-800 underline sm:text-start text-end"><Link to="">Find
                                More</Link></div>
                    </div>
                </div>
                <div className="group aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-white w-full xl:aspect-w-7 xl:aspect-h-8 animate__animated animate__backInUp"
                    style={{boxShadow: "1px 1px 100px 1px rgba(0, 0, 0, 0.15)" , borderRadius: "0px 0px 0px 50px"}}>
                    <div className="items-center justify-center text-left px-6 py-6 sm:px-12 sm:py-10">
                        
                        <div className="text-xl font-bold uppercase mb-3 sm:text-3xl text-blue-800">Junior programMERS
                        </div>
                        <div className="font-sans text-sm">All for inforamtion and programming Educations a
                            program designed toteach youths from low income familyand refugee camps aged between 8
                            to 16 years how to code.</div>
                        <div className="font-sans text-sm font-medium mt-3 sm:mt-7 text-blue-800 underline sm:text-start text-end"><Link to="/juniors">Find
                                More</Link></div>
                    </div>
                </div>
                <div className="group aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-white w-full xl:aspect-w-7 xl:aspect-h-8 animate__animated animate__backInUp"
                    style={{boxShadow: "1px 1px 100px 1px rgba(0, 0, 0, 0.15)" , borderRadius: "0px 0px 50px 0px"}}>
                    <div className="items-center justify-center text-left px-6 py-6 sm:px-12 sm:py-10">
                        <div className="text-xl font-bold uppercase mb-3 sm:mb-7 sm:text-3xl text-blue-800">scpiot</div>
                        <div className="font-sans text-sm">Sustainable Career in programming and IoT Program was
                            initiated in 2019 to equipe TVET and University graduates with ICT employable skills.</div>
                        <div className="font-sans text-sm font-medium mt-3 sm:mt-7 text-blue-800 underline sm:text-start text-end"><Link to="">Find
                                More</Link></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default Home;