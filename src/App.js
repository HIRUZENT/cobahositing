import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Madding from './Pages/Madding/Madding';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/madding" element={<Madding/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
