import Register from './register/Register';
import Admin from './register/Admin';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './register/Update';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Admin/>}></Route>
    <Route path='/update/:id' element={<Update/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
