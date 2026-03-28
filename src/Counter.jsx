 import { useState } from "react";
 
 
 export default function Counter() {
    const [count, setCount] = useState(0);

    const counterStyle = {
        border: '2px solid red',
        margin: '20px',
        padding: '20px',
    };

    return (
        <div style={counterStyle}  >
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>  
    )
}