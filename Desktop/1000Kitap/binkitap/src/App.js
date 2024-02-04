import './App.css';
import Home from './Components/Home';
import Profile from './Components/Profile';
import SignUp from './Components/SignUp';
import Books from './Components/Books';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Component } from 'react';
import SideBar from './SideBar';


function App() {

    return(
    <div className='App'>
      <Router>
          <SideBar/>
          	<Routes>
             <Route path ="/" element = {<Home />}/>
             <Route path ="/books" element = {<Books/>}/>
             <Route path ="/profile" element = {<Profile/>}/>
             <Route path ="/signUp" element = {<SignUp/>}/>
            </Routes>
      </Router>
    
     </div>
    
  );

}

export default App;