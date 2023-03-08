import React, { PureComponent } from "react";
import './section2.css'

/*
*This section will be for the description section
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
                    <div className="row-span-5 border-r-2 rounded-r border-[#00ADBB]">
                        <div className="text-center content-center info text-8xl">
                            <h1>The<br></br><span className={classes.blueText}>Dream</span><br></br> Team</h1>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="w-full h-auto">
                    <p>Right block</p>
                </div>
            </div>
        </section>
    )
}

export default Section2