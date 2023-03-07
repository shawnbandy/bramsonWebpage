import React, { useEffect, useState } from "react";
import './section1.css'

/*
*This section will be for the video/gif that is currently on the Website
*/

const words = ['CREATE', 'PRODUCE', 'DELIVER']
let speed = 10000;



function Section1({sectionClass}){

    const [index, setIndex] = useState(0)
    const [offset, setOffset] = useState(0)
    const [forwards, setForwards] = useState(true);
    const [skipCount, setSkipcount] = useState(0)
    const [skipDelay, setSkipDelay] = useState(15)
    const [part, setPart] = useState('')
    const [word, setWord] = useState('test')

    function animate() { 
    console.log('testing')
    setInterval(() => {
        if (forwards){
            if(offset >= words[index].length){
                setSkipcount(skipCount + 1)
                if (skipCount == skipDelay){
                    setForwards(false)
                    setSkipcount(0)
                }
            }
        } else {
            if (offset == 0){
                setForwards(true)
                setIndex(index + 1);
                setOffset(0)
                if(index >= words.length){
                    setIndex(0);
                }
            }
        }
        setPart(words[index].substring(0, offset))  
        if (skipCount == 0) {
          if (forwards) {
            setOffset(offset + 1);
          }
          else {
            setOffset(offset - 1);
          }
        }
        setWord(part);
    }, speed) 
}

    useEffect(() => {
        animate()
    })

    return(
        <section className={sectionClass}>
            <div className="flex">
                <span className="text-9xl">WE</span>
                <div className="wordDiv">{word}</div>
            </div>
        </section>
    )
}

export default Section1