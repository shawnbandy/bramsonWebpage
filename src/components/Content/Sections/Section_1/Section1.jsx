import React from "react";
import './section1.css'
import Typewriter from 'typewriter-effect';

/*
*This section will be for the video/gif that is currently on the Website
TODO: update background to that animated image?
*/

const classes = {
    blueText: "text-[#00ADBB]",
    blank: ''
}

function Section1({sectionClass}){

    return(
        <section className={sectionClass}>
            <div className="text-white text-center">
                <br></br>
                <h6 className="font-medium text-4xl underline underline-offset-8 decoration-[#00ADBB]">At Bramson</h6>
            </div>
            <div className="text-[10rem] typer grid grid-cols-2 mt-6">
                <div className="grid justify-items-end mr-24">
                    <span className="text-white">WE</span>
                </div>
                <div className="text-[#00ADBB]">
                    <Typewriter
                        options={{
                        strings: ['Create', 'Produce', 'Deliver'],
                        autoStart: true,
                        loop: true,
                    }}/>
                </div>
            </div>
            <div className="text-2xl text-white text-center">
                <p>Not all meetings are the same.<br></br> We are here to help tell <span className={classes.blank}>your story</span>, reach <span className={classes.blank}>your audience</span>, and achieve <span className={classes.blank}>your goals.</span> <br></br> From events in hotel ballrooms to meetings in family living rooms...<br></br> <span className={classes.blueText}>We are Bramson Productions.</span></p>
                <br></br>
            </div>
        </section>
    )
}

export default Section1