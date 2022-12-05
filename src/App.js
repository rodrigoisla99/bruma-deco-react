import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './Context/CartProvider';
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/category/:categoryName' element={<ItemListContainer/>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:categoryName/item/:id' element={<ItemDetailContainer />} />
          <Route path='/aboutUs'Us element={<AboutUs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <hr/>
        <Footer></Footer>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
