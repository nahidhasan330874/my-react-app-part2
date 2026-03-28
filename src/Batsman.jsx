import{ useState } from "react";

export default function Batsman() {
    const [runs, setRuns] = useState(0);

     const handleSingles = () => {
        setRuns(runs + 1);
     }

     const handleFore = () => {
        setRuns(runs + 4);
     }

     const handleSix = () => {
        setRuns(runs + 6);
     }


    return (
        <div>
            <h2>Player : Bangla Batsman</h2>
            {
                runs >= 100 && <p>you score {runs} runs, you are in good form</p>
            }
            <h1>Score: {runs}</h1>
            <div style={{gap: '10px', display: 'flex', justifyContent: 'center'}}>
             <button onClick={handleSingles}>Singles</button> 
            <button onClick={handleFore}>Fore</button>
            <button onClick={handleSix}>Six</button>
            </div>
        </div>
    )
}