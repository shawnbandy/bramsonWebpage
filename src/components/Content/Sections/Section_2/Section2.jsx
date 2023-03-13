import React from "react";
import './section2.css'

/*
*This section will be for the description section
TODO: Figure out how to make this section pop a little more

Since 1989, Bramson Productions has been a global leader in providing the very best in event and business meeting production.

Our company has vast experience, the latest technology at our disposal, and the best and brightest people in the Industry.

Our foundation is built upon a relentless commitment to providing our clients with the best customer service in the industry.
*/

const classes = {
    blueText: "text-[#00ADBB]",
    blank: ''
}

function Section2({sectionClass}){
    return(
        <section className={sectionClass}>
            <div className="flex">
                <div className="grid grid-rows-7 content-center w-[31rem] h-[31rem]">
                    <div>
                    </div>
                    <div className="row-span-5 border-r-2 border-[#00ADBB]">
                        <div className="text-center content-center info text-8xl">
                            <h1>The<br></br><span className={classes.blueText}>Dream</span><br></br> Team</h1>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="grid grid-rows-7 content-center w-full h-[31rem]">
                    <div>
                    </div>
                    <div className="row-span-5">
                        {/* Have tried below with multiple sizes of text, and 2xl is better than 3 with this font */}
                        <div className="text-center content-center text-2xl mx-16">
                            <p>Since 1989, <span className={classes.blueText}>Bramson Productions</span> has been a global leader in providing <span className={classes.blueText}>outstanding</span> in event and business meeting production.</p>
                            <br></br> 
                            <p>We have <span className={classes.blueText}>extensive experience</span>, the industry's best and most <span className={classes.blueText}>talented people</span>, and the latest technology at our disposal.</p>
                            <br></br> 
                            <p>Our foundation is built upon a relentless <span className={classes.blueText}>commitment</span> to providing our clients with the <span className={classes.blueText}>best customer service</span> in the industry.</p>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2