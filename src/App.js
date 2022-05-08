import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './Pages/AddItems/AddItems';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login';
import ProtectedRoute from './Pages/Login/ProtectedRoute/ProtectedRoute';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItems from './Pages/MyItems/MyItems';
import Register from './Pages/Register/Register';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import NotFound from './Shared/NotFound/NotFound';

function App() {
  return (
    <div className='bg-light'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <ProtectedRoute>
            <Inventory></Inventory>
          </ProtectedRoute>
        }></Route>
        <Route path='/manageInventory' element={
          <ProtectedRoute>
            <ManageInventory></ManageInventory>
          </ProtectedRoute>
        }></Route>
        <Route path='/myItems' element={
          <ProtectedRoute>
            <MyItems></MyItems>
          </ProtectedRoute>
        }></Route>
        <Route path='/addItems' element={
          <ProtectedRoute>
            <AddItems></AddItems>
          </ProtectedRoute>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

      {/* stack overflow quesction link ::: https://stackoverflow.com/questions/72090947/why-we-use-variant-instead-classname-in-react-bootstrap-button  */}
    </div>
  );
}

export default App;
