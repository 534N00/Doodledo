import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage/HomePage';
import DrawPage from './components/Pages/DrawPage/DrawPage';
import Faq from './components/Pages/FAQ/faq';
import PrivacyPolicy from './components/Pages/PrivacyPolicy/PrivacyPolicy';
import Support from './components/Pages/Support/Support';
import Tos from './components/Pages/TOS/tos';
import './App.css'



function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage/ >} />
          <Route path="/draw" element={<DrawPage/ >} />
          <Route path="/faq" element={<Faq/ >} />
          <Route path="/privacy" element={<PrivacyPolicy/ >} />
          <Route path="/support" element={<Support/ >} />
          <Route path="/tos" element={<Tos/ >} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
