import Register from './register/Register';
import Admin from './register/Admin';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './register/Update';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/update/:id' element={<Update/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    <Route path='/admin' element={<Admin/>}></Route>
    
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
