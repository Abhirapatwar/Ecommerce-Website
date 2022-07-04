import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Page3 from './components/Page3';
import Shop from './components/Shop';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/confirmed/:somevalue" element={<Shop />} />
        <Route path="/home/:content" element={<Shop />} />
        <Route path="/checkout/:somex" element={<Page3/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
