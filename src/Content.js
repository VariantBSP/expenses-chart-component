import React from "react";
import { useState } from "react";
import Bars from "./Bars";

const Content = () => {
    const [mon, setMon] = useState({height:17.45, name:"mon"});
    const [tue, setTue] = useState({height:34.91, name:"tue"});
    const [wed, setWed] = useState({height:52.36, name:"wed", color:"hsl(186, 34%, 60%)"});
    const [thu, setThu] = useState({height:31.07, name:"thu"});
    const [fri, setFri] = useState({height:23.39, name:"fri"});
    const [sat, setSat] = useState({height:43.28, name:"sat"});
    const [sun, setSun] = useState({height:25.48, name:"sun"});
    const days = [mon, tue, wed, thu, fri, sat, sun]

    return ( 
        <div className="chart-box">
            <h1>Spending - Last 7 days</h1>
            <div className="bar-box">
                { days.map(day =>(<Bars day={day} key={day}/>)) }
            </div>
            <div className="footer">
                <div className="left">
                    <p>Total this month</p>
                    <h1>$478.33</h1>
                </div>
                <div className="right">
                    <span>+2.4%</span>
                    <p>from last month</p>
                </div>
            </div>
        </div>
     );
}
 
export default Content;