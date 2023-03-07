import { dark } from "@mui/material/styles/createPalette";
import React from "react";
import Section1 from "./Sections/Section_1/Section1";
import Section2 from "./Sections/Section_2/Section2";
import Section3 from "./Sections/Section_3/Section3";
import Section4 from "./Sections/Section_4/Section4";
import Section5 from "./Sections/Section_5/Section5";

const classes = {
    white: 'h-96 bg-[#FFFFFF]',
    dark: 'h-96 bg-[#505A5C]',
}

function Content(){
    return(
        <section>
            <Section1 sectionClass={classes.dark} />
            <Section2 sectionClass={classes.white} />
            <Section3 sectionClass={classes.dark}/>
            <Section4 sectionClass={classes.white}/>
            <Section5 sectionClass={classes.dark} />
        </section>
    )
}

export default Content