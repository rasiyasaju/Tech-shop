
import './App.css';
import Header from './components/Header/Header.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './components/Pages/Shop/Shop.js';

import ShopCategory from './components/Pages/ShopCategory/ShopCategory.js';
import Product from './components/Pages/Product/Product.js';
import Cart from  './components/Pages/Cart/Cart.js';
import LoginSignup from './components/Pages/LoginSignup/LoginSignup.js';
import Footer from './components/Footer/Footer.js';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
