import React,{useState} from 'react';
import {questions} from './Api'
import "./Accordion.css"
import MyAccordion from './MyAccordion'

const Accordion = () => {
    const [data,setdata]=useState( questions);
    return (
        <>
        <section className="main-div">
            <h1>Questions</h1>
        {
            data.map((curelm)=>{
                const{id} = curelm;
                return <MyAccordion key={id} {...curelm}/>
            })
        }
        </section>

        </>
    )
}

export default Accordion;
