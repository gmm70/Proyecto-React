
import './App.css';
import NavBar from './NavBar';
import ItemListContainer from './ItemList';
import { ItemDetailContainer } from './ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartWidget from './CartWidget';
import Detalles from './Detalles';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/inicio' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<CartWidget/>}/>
        <Route path='/detalle/:detallesid' element={<ItemDetailContainer/>}/>
        <Route path='/detalle/info' element ={<Detalles/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
