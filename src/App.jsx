import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage/HomePage';
import DrawPage from './components/Pages/DrawPage/DrawPage';
import './App.css'



function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage/ >} />
          <Route path="/draw" element={<DrawPage/ >} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
