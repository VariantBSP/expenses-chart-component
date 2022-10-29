import { useState } from "react";

const Bars = ({day}) => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        if (toggle) {setToggle(false) } 
        else{setToggle(true)}
    }

    return ( 
        <div>
            <div>
            {toggle && <div className="amount">${day.height}</div>}
            <div className="bar" style={{height:`${day.height*0.5}vh`, background:`${day.color}`}} onClick={handleClick}></div>
            </div>
            <label>{day.name}</label>
        </div>
     );
}
 
export default Bars;