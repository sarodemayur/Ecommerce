import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductsPage from './pages/ProductsPage';
import About from "./pages/About"
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Login from './pages/Login';
//import ProtectedRoute from './Services/ProtectedRoute';
import Cart from './components/Cart'
import CheckOut from './pages/CheckOut';
 
const App = () => {
  return (
  <>
  <div className='overflow-hidden'></div>
    <Router>
      <Header/>
      <Routes>
        {/* <Route path='/' element={<ProtectedRoute/>}></Route> */}
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path='/productspage' element={<ProductsPage/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='checkout' element={<CheckOut/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
    </>
  );
};

export default App;
