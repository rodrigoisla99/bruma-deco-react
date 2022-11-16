import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<ItemListContainer/>}></Route>
      <Route path='/category/:categoryName' element={<ItemListContainer/>}></Route>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/category/:categoryName/item/:id' element={<ItemDetailContainer />} />
      {/* <Route path='/item/:id' element={<Contact/>}/> */}
      </Routes>
      <hr/>
      <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
