import React from "react";
import Section1 from "./Sections/Section_1/Section1";
import Section2 from "./Sections/Section_2/Section2";
import Section3 from "./Sections/Section_3/Section3";
import Section4 from "./Sections/Section_4/Section4";
import Section5 from "./Sections/Section_5/Section5";

function Content(){
    return(
        <section>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
        </section>
    )
}

export default Content