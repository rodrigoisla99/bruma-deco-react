import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Banner name="Armá tu espacio, decorá tu vida"/>
      <hr/>
      <Routes>
      <Route path='/' element={<ItemListContainer/>}></Route>
      <Route path='/category/:categoryName' element={<ItemListContainer/>}></Route>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      <hr/>
      {/* <ItemDetailContainer/> */}
      <Footer></Footer>
    </BrowserRouter>




      
      {/* <Banner name="Armá tu espacio, decorá tu vida"/>
      <hr/>
      <ItemListContainer />
      <hr/>
      <ItemDetailContainer/>
      <Footer></Footer> */}
    </>
  );
}

export default App;
