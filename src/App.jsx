
import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';  
import Friends from './Friends';
import Posts from './Posts';
import { Suspense } from 'react';

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
 
// const fetchFriends = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }



const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {

  const postsPromise = fetchPosts();
// const friendsPromise = fetchFriends();

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
             
           <Suspense fallback={<h2>Posts are coming........</h2>}>
             <Posts postsPromise={postsPromise} ></Posts>
           </Suspense>


           {/* <Suspense fallback={<h2>Loading...</h2>}>
             <Users fetchUsers={fetchUsers}></Users>
           </Suspense> */}

           {/* <Suspense fallback={<h2>Friends are coming for treat...</h2>}>
              <Friends friendsPromise={friendsPromise} ></Friends>
           </Suspense>
               */}
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
