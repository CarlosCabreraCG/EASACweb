import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';

function App() {
  return (
    <Router>
    <div className = 'App'> 
          <div style = {{position: 'relative'}}>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/home" element={<Home/>} />
                  <Route path="/info" element={<Info/>} />
                  <Route path="*" element={<Home/>} />
              </Routes>
          </div>
    </div>
  </Router>
  );
}

export default App;
