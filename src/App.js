import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Products/Products';
import UploadProduct from './Pages/UploadProduct/UploadProduct';
import OrderList from './Pages/OrderList/OrderList';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/uploadProduct' element={
          <PrivateRoute>
            <UploadProduct></UploadProduct>
          </PrivateRoute>
        }></Route>
        <Route path='/orders' element={
          <PrivateRoute>
            <OrderList></OrderList>
          </PrivateRoute>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
