import React,{useState} from 'react'


const MyAccordion = ({question,answer}) => {
    const [show,setshow] = useState(false);
    return (
       <>
        <div className="main-heading">
            {/* click er por toggol hobe flase hole true ,true hole false */}
            {/* show er value true hole - show koro or + flase hole */}
            <p onClick={()=>setshow(!show)}> {show? "-" : "+"}</p>
            <h3>{question}</h3>

        </div>
       {
           //mane jodi usestate true hoi tokhn e answer show korbe ai logic
           show && <p className="answers">{answer}</p>
       }
      
       </>
    )
}

export default MyAccordion;
