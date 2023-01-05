import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup'
import UserDashboard from './components/UserDashboard'
import AdminDashboard from './components/AdminDashboard'
import AddMember from './components/AddMember';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/userDashboard" element={<UserDashboard/>}/>   
        <Route path="/adminDashboard" element={<AdminDashboard/>}/>    
        <Route path="/addMember" element={<AddMember/>}/>    
      </Routes>
    </div>
  );
}

export default App;
