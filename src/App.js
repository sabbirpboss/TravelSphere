import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import CheckOut from './components/CheckOut/CheckOut';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<HomePage></HomePage>}></Route>
       <Route path='/home' element={<HomePage></HomePage>}></Route>
       <Route path='/checkOut' element={<CheckOut></CheckOut>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signUp' element={<SignUp></SignUp>}></Route>
     </Routes>
    </div>
  );
}

export default App;
