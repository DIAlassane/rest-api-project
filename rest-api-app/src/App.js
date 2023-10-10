import './App.css';
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeClient from './Frontclient/HomeClient';
import FrontUserCard from './components/FrontUserCard';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/update/:id' element={<UpdateUser />}></Route>
        <Route path='/homeClient' element={<HomeClient />}></Route>
        <Route path='/frontUserCard/:id' element={<FrontUserCard />}></Route>   
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;