import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer name="Armá tu espacio, decorá tu vida"/>
    <Footer></Footer>
    </>
  );
}

export default App;
