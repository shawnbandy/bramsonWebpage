import React, { useEffect, useState } from "react";
import './section1.css'
import Typewriter from 'typewriter-effect';

/*
*This section will be for the video/gif that is currently on the Website
*/

const words = ['CREATE', 'PRODUCE', 'DELIVER']
let speed = 10000;



function Section1({sectionClass}){

    return(
        <section className={sectionClass}>
            <div className="text-2xl text-white">
                <h1>At Bramson</h1>
            </div>
            <div className="text-[10rem] typer grid grid-cols-2">
                <div className="grid justify-items-end mr-8">
                    <span className="text-white">WE</span>
                </div>
                <div className=" text-[#00ADBB]">
                    <Typewriter
                        options={{
                        strings: ['Create', 'Produce', 'Deliver'],
                        autoStart: true,
                        loop: true,
                    }}/>
                </div>
            </div>
            <div className="text-2xl text-white">
                <p>Not all meetings are the same. We are here to help tell your story, reach your audience and achieve your goals. From events in hotel ballrooms to meetings in family living rooms... we are Bramson Productions.</p>
                <br></br>
                <br></br>
                <p>Nice to meet you! To learn more, say hello.</p>
            </div>
        </section>
    )
}

export default Section1