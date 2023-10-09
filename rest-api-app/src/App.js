import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './component/users';
import UpdateUser from './component/UpdateUser';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Users/>}></Route>
    <Route path='/update/:id' element={<UpdateUser/>}></Route>
    <Route path='/createUser' element={<CreateUser/>}></Route>
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
