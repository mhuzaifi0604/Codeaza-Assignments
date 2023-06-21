// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [task, settask] = useState(0)
//   const input = document.getElementById('input');
//   const HandleFoemSubmit = (event) =>{
//     event.preventDefault();
//     const time = new Date();
//     const seconds = time.getSeconds();
//     const mins = time.getMinutes();
//     const hours = time.getHours();
//     const tasklist = document.getElementById('list');
//     let tasks = [];
//     tasklist.innerHTML = '';
//     tasks.forEach((task, index) => {
//       const item = document.createElement('li');
//       item.classList.add('shadow-lg', 'rounded', 'px-8', 'pt-6', 'pb-8', 'mb-4', 'bg-black', 'opacity-50');
      
//       const text = document.createElement('span');
//       text.textContent = task;
//       item.appendChild(text);

//       const deleteButton = document.createElement('button');
//       deleteButton.textContent = 'Delete';
//       deleteButton.classList.add('bg-red-500', 'text-white', 'rounded-md', 'px-2', 'py-2', 'ml-2');
//       deleteButton.addEventListener('click', () => deleteTask(index));
//       listItem.appendChild(deleteButton);

//       tasklist.appendChild(item);
//     });
//   }
//   function addTask(e) {
//     e.preventDefault();
//     const task = input.value.trim();
//     if (task !== '') {
//       tasks.push(task);
//       input.value = '';
//       HandleFoemSubmit();
//     }
//   }
//     // Function to delete a task
//   function deleteTask(index) {
//     tasks.splice(index, 1);
//     HandleFoemSubmit();
//   }
//   return (
//     <div>
//       <style>{`
//           html {
//             background-image: linear-gradient(rgb(20, 30, 48), rgb(36, 59, 85));
//             height: 100%;
//           }
//           body {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//           }
//         `}</style>
//       <div>
//         <h1 class="text-xl font-bold mb-4 text-center text-white">To-Do List</h1>
//         <form id="form" onSubmit={HandleFoemSubmit}>
//       <div class="flex mb-2">
//         <input type="text" id="input" class="flex-grow rounded p-2 border-2 border-black w-64" placeholder="Enter a task..." required />
//         <input type="submit" class="bg-green-500 text-white w-10 h-10 rounded-full px-4 py-2 ml-2 flex items-center justify-center font-bold text-4xl text-center" />
//       </div>
//     </form>
//     <ul id="list" class="space-y-2">

//     </ul>
//       </div>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const [secs, setsecs] = useState();
  const [mins, setmins] = useState();
  const [hours, sethours] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const time = new Date();
    setsecs(time.getSeconds());
    setmins(time.getMinutes());
    sethours(time.getHours());
    if (inputValue.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, inputValue.trim()]);
      setInputValue('');
    }
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <style>{`
        html {
          background-image: linear-gradient(rgb(20, 30, 48), rgb(36, 59, 85));
          height: 100%;
        }
        body {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <div>
        <h1 className="text-xl font-bold mb-4 text-center text-white">To-Do List</h1>
        <form id="form" onSubmit={handleSubmit}>
          <div className="flex mb-2" style={{'width':'400px'}}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-grow rounded p-2 border-2 border-black w-64"
              placeholder="Enter a task..."
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-2xl focus:outline-none"
            >
              <span className="text-2xl">+</span>
            </button>
          </div>
        </form>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="shadow-lg rounded p-4 m-4 bg-black opacity-50 border-black hover:border-green-300 opacity-100 border-2"
              style={{'color':'#03e9f4'}}
            >
              <span>Time - {hours}h:{mins}m:{secs}s {task}</span>
              <button
                className="bg-red-500 text-white rounded-md px-2 py-2 ml-8"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
