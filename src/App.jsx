
import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';

function App() {

function handleClick() {
  alert('Button clicked!');
}

const handleClick2= () => {
  alert('Button clicked2!');
}

const handleAdd5= (num) => {
  const newNum = num + 5;
   alert(newNum);
}

  return (
    <>
       
        <div className="hero">
             <h1>Get started</h1>
              <Users></Users>
              
            <Batsman></Batsman>
            <Counter></Counter>

           <button onClick={handleClick}>Click Me</button> <br />
           <button onClick={handleClick2}>Click Me 2</button> <br />

           <button onClick={() => alert('Button clicked3!')}>Click Me 3</button> <br />


           <button onClick={() => handleAdd5(20)}>Click Me 4</button>
        </div>
       
    </>
  )
}

export default App
