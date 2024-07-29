import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/Pages/HomePage/HomePage';
import DrawPage from './components/Pages/DrawPage/DrawPage';
import Faq from './components/Pages/FAQ/faq';
import PrivacyPolicy from './components/Pages/PrivacyPolicy/PrivacyPolicy';
import Support from './components/Pages/Support/Support';
import Tos from './components/Pages/TOS/tos';

import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
import './App.css'

function App() {
  // const supabase = createClient(PROJECT_URL, API_KEY);
  // maybe some state to keep track of user login status
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  const [isSignedIn, setIsSignedIn] = useState(false);
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
