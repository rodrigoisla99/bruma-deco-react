import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
    <NavBar/>
    <Banner name="Armá tu espacio, decorá tu vida"/>
    <hr/>
    <ItemListContainer />
    <hr/>
    <ItemDetailContainer/>
    <Footer></Footer>
    </>
  );
}

export default App;
