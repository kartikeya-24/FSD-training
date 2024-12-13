
// import './App.css'
// import Card from "./components/Card.jsx"
// import pic1 from "./images/my photo.jpg"
// import State from './components/State.jsx'  
// function App() {
//   return (
//     <div className="App">
//       <State/>
//           </div>
//   )
// }
  
// export default State

// import React,{useState} from 'react'
// import {BrowserRouter, Routes,Route} from "react-router-dom";
// import Login from './components/Login';
// import MainLayout from './components/MainLayout';
// import Registration from './components/Registration';
// import Dashboard from './components/Dashboard';

// function App() {
//   const [store,setStore]=useState("");
//   return (
//     <div>
//       {JSON.stringify(store)}
//       <BrowserRouter>
//       <Routes>
//     <Route path="/" element={<MainLayout />}> 
//     <Route path="/login" element={<Login regDataLogin={store} />}  />
//     <Route path="/registration" element={<Registration 
//     regData={setStore} />} />   
//     </Route>
//       </Routes>
      
//       </BrowserRouter>

//     </div>
//   )
// }

// export default App
import Movie from './components/Movie'

const App = () => {
  return (
    <Movie />
  )
}

export default App