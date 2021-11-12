import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home'
import ShopOrderPage from './pages/ShopOrder'
import ServiceClientPage from './pages/ServiceClient';
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/ShopOrder" element={<ShopOrderPage/>} />
        <Route path="/Service-client" element={<ServiceClientPage/>} />
      </Routes>
    </Router>

  );
}

export default App;
