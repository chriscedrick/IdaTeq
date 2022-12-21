import React from "react";
import homeback from "./images/homeback.jpg"

const Services = () => {

    return(
    <div className="bg-cover" style={{backgroundImage: `url(${homeback})`}}>
        <div className="text-center lg:text-left lg:py-10">
            <div className="container p-7 ">
                <div className="grid grid-cols-2 gap-4 justify-center items-center lg:grid-cols-3">
                    <div className="mb-4 md:mb-0 lg:col-span-2 text-xl lg:text-4xl text-start">
                        <p className="lg:pl-20 sm:pl-10 text-blue-800">
                            The development team of IdaTeq is Equipped with proper Human resources specializedin different
                            system development tasks.
                        </p>
                    </div>
                    <div className="mb-4 lg:mb-0 text-center">
                        <button type="button"
                            className="inline-block px-3 py-2.5 bg-blue-800 text-white font-bold text-lg leading-tight uppercase rounded hover:bg-blue-700 hover:bg-opacity-100 focus:outline-none focus:ring-0 animate__animated animate__pulse animate__delay-1s"
                            data-mdb-ripple="true" data-mdb-ripple-color="light" style={{borderRadius: "10px"}}>
                            HIRE US TODAY
                        </button>
                    </div>
    
                </div>
            </div>
        </div>
    
        <div className="relative">
            <div className="mx-auto max-w-2xl py-2 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-20 ">
                <div
                    className="grid grid-cols-2 gap-y-4  gap-x-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-y-10 xl:gap-x-10 lg:px-10">
                    <div className="group aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-white w-full xl:aspect-w-7 xl:aspect-h-8 animate__animated animate__backInLeft"
                        style={{boxShadow: "1px 1px 100px 1px rgba(0, 0, 0, 0.15)", borderRadius: "15px"}}>
                        <div className="items-center justify-center text-center px-6 py-6 lg:px-12 lg:py-10 ">
                            <div className="text-2xl font-bold uppercase mb-3 lg:mb-7 lg:text-3xl text-blue-800 ">SYSTEM ANALYSIS
                                & DESIGN
                            </div>
                            <div className="font-sans text-sm lg:text-xl">System analyses and design team combines both
                                functional and
                                technical analysts. we beleive to develop a proper system of which functional analysis is
                                equally important as technical analysis. Our system analysis and design team specializes in
                                software</div>
                        </div>
                    </div>
                    <div className="group aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-w-7 xl:aspect-h-8 animate__animated animate__backInRight"
                        style={{boxShadow: "1px 1px 100px 1px rgba(0, 0, 0, 0.15)",borderRadius: "15px"}}>
                        <div className="items-center justify-center text-center px-6 py-6 lg:px-12 lg:py-10">
                            <div className="text-2xl font-bold uppercase mb-3 lg:text-3xl text-blue-800">DATABASE MANAGEMENT
                            </div>
                            <div className="font-sans text-sm lg:text-xl">We have database expertise ranging from ISAM or flat
                                database systems like Microsoft Access,MySQL , postgress , visual FoxPro to robust
                                commercial database engines like Oracle,Mongo DB and Microsoft SQL. For web database
                                connectivity and cross-platform data management we also have specialized experience and
                                expertise in SQL and No SQL database</div>
                        </div>
                    </div>
                    <div className="group aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-white w-full xl:aspect-w-7 xl:aspect-h-8 animate__animated animate__backInUp"
                        style={{boxShadow: "1px 1px 100px 1px rgba(0, 0, 0, 0.15)", borderRadius: "15px"}}>
                        <div className="items-center justify-center text-center px-6 py-6 lg:px-12 lg:py-10">
                            <div className="text-2xl font-bold uppercase mb-3 lg:text-3xl text-blue-800">PROGRAMMING
                            </div>
                            <div className="font-sans text-sm lg:text-xl">System analyses and design team combines both
                                functional and technical analysts. we beleive to develop a proper system of which functional
                                analysis is equally important as technical analysis. Our system analysis and design team
                                specializes in software</div>
                        </div>
                    </div>
                    <div className="group aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-white w-full xl:aspect-w-7 xl:aspect-h-8 animate__animated animate__backInUp"
                        style={{boxShadow: "1px 1px 100px 1px rgba(0, 0, 0, 0.15)", borderRadius: "15px"}}>
                        <div className="items-center justify-center text-center px-6 py-6 lg:px-12 lg:py-10">
                            <div className="text-2xl font-bold uppercase mb-3 lg:text-3xl text-blue-800">PROGRAMMING</div>
                            <div className="font-sans text-sm lg:text-xl">System analyses and design team combines both
                                functional and technical analysts. we beleive to develop a proper system of which functional
                                analysis is equally important as technical analysis. Our system analysis and design team
                                specializes in software</div>
                            <div className="font-sans text-sm font-medium mt-3 lg:mt-7 text-blue-800 underline">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
        </div>
    );
};

export default Services;