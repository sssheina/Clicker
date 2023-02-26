import React,{useState} from "react";
import './Counter.css';

export default function Counter() {
    const [pressed, setPressed] = useState({count: 0});
    const handleClick = () => {
    setPressed(({count}) => ({
        count: count + 1
    }));
    };
    
    return (
        <div className="counteiner">
            <h1>CLICKER</h1>
    <button className="btn" onClick={handleClick}>{pressed.count}</button>
    </div>
    );
    } 