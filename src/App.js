import './App.css';
import StartPage from './Components/StartPage';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import CarsPage from './Components/CarsPage';
import SellersPage from './Components/SellerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/study/cars" element={<CarsPage/>} />
        <Route path="/study/sellers" element={<SellersPage/>} />
        <Route path="*" element={<StartPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
