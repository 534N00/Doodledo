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
import Header from './components/Spans/Header/Header';
import Footer from './components/Spans/Footer/Footer';

function App() {
  // const supabase = createClient(PROJECT_URL, API_KEY);
  // maybe some state to keep track of user login status
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  const [profilePicURL, setProfilePicURL] = useState('');
  const [userName, setUserName] = useState('');
  const [userID, setUserID] = useState(null);

  const cacheFunction = (uid, username, pfpURL) => {
    setProfilePicURL(pfpURL);
    setUserName(username);
    setUserID(uid);
  };
  
  return (
    <> 
      <Router>
        <Header supabase={supabase} cacheFunction={cacheFunction} UID={userID} pfpURL={profilePicURL} username={userName} />
        <div className="content">
          <Routes>
            <Route path="/" exact element={<HomePage supabase={supabase} UID={userID} />} />
            <Route path="/draw" element={<DrawPage/ >} />
            <Route path="/faq" element={<Faq/ >} />
            <Route path="/privacy" element={<PrivacyPolicy/ >} />
            <Route path="/support" element={<Support/ >} />
            <Route path="/tos" element={<Tos/ >} />
            {/* <Route path="/password" */}
          </Routes>
        </div>
        <Footer /> 
      </Router>
    </>
  );
}

export default App;

/* Sample of successful sign-in */
// {
//     "user": {
//         "id": "6c9653cb-b670-48e2-8bbc-dd602fa81c7d",
//         "aud": "authenticated",
//         "role": "authenticated",
//         "email": "seancraggles@gmail.com",
//         "email_confirmed_at": "2024-07-29T21:18:35.846987Z",
//         "phone": "",
//         "confirmation_sent_at": "2024-07-29T21:18:04.863583Z",
//         "confirmed_at": "2024-07-29T21:18:35.846987Z",
//         "last_sign_in_at": "2024-07-30T16:11:14.941429451Z",
//         "app_metadata": {
//             "provider": "email",
//             "providers": [
//                 "email"
//             ]
//         },
//         "user_metadata": {
//             "email": "seancraggles@gmail.com",
//             "email_verified": false,
//             "phone_verified": false,
//             "sub": "6c9653cb-b670-48e2-8bbc-dd602fa81c7d"
//         },
//         "identities": [
//             {
//                 "identity_id": "c5055d33-cbd4-466e-b780-cda1ccd4b685",
//                 "id": "6c9653cb-b670-48e2-8bbc-dd602fa81c7d",
//                 "user_id": "6c9653cb-b670-48e2-8bbc-dd602fa81c7d",
//                 "identity_data": {
//                     "email": "seancraggles@gmail.com",
//                     "email_verified": false,
//                     "phone_verified": false,
//                     "sub": "6c9653cb-b670-48e2-8bbc-dd602fa81c7d"
//                 },
//                 "provider": "email",
//                 "last_sign_in_at": "2024-07-29T21:18:04.854305Z",
//                 "created_at": "2024-07-29T21:18:04.854359Z",
//                 "updated_at": "2024-07-29T21:18:04.854359Z",
//                 "email": "seancraggles@gmail.com"
//             }
//         ],
//         "created_at": "2024-07-29T21:18:04.843779Z",
//         "updated_at": "2024-07-30T16:11:14.979683Z",
//         "is_anonymous": false
//     },
//     "session": {
//         "access_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6IlhBYW9YM0Y0MFl2OTRSN0ciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2Rrb3l2YmpyY2dwendoZGVldHl1LnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI2Yzk2NTNjYi1iNjcwLTQ4ZTItOGJiYy1kZDYwMmZhODFjN2QiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzIyMzU5NDc0LCJpYXQiOjE3MjIzNTU4NzQsImVtYWlsIjoic2VhbmNyYWdnbGVzQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZW1haWwiOiJzZWFuY3JhZ2dsZXNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInN1YiI6IjZjOTY1M2NiLWI2NzAtNDhlMi04YmJjLWRkNjAyZmE4MWM3ZCJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzIyMzU1ODc0fV0sInNlc3Npb25faWQiOiIxZGUzZTgyZS1mYTJmLTRhOGYtOTk2ZC01Zjc1MTgxNGQxZGIiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.Y2APKWZ9VYsipZpbIFqqMClQ1juAodxYFh1_nMNhA60",
//         "token_type": "bearer",
//         "expires_in": 3600,
//         "expires_at": 1722359474,
//         "refresh_token": "Stqfxp-GC_HEeaqZ8RD_9w",
//         "user": {
//             "id": "6c9653cb-b670-48e2-8bbc-dd602fa81c7d",
//             "aud": "authenticated",
//             "role": "authenticated",
//             "email": "seancraggles@gmail.com",
//             "email_confirmed_at": "2024-07-29T21:18:35.846987Z",
//             "phone": "",
//             "confirmation_sent_at": "2024-07-29T21:18:04.863583Z",
//             "confirmed_at": "2024-07-29T21:18:35.846987Z",
//             "last_sign_in_at": "2024-07-30T16:11:14.941429451Z",
//             "app_metadata": {
//                 "provider": "email",
//                 "providers": [
//                     "email"
//                 ]
//             },
//             "user_metadata": {
//                 "email": "seancraggles@gmail.com",
//                 "email_verified": false,
//                 "phone_verified": false,
//                 "sub": "6c9653cb-b670-48e2-8bbc-dd602fa81c7d"
//             },
//             "identities": [
//                 {
//                     "identity_id": "c5055d33-cbd4-466e-b780-cda1ccd4b685",
//                     "id": "6c9653cb-b670-48e2-8bbc-dd602fa81c7d",
//                     "user_id": "6c9653cb-b670-48e2-8bbc-dd602fa81c7d",
//                     "identity_data": {
//                         "email": "seancraggles@gmail.com",
//                         "email_verified": false,
//                         "phone_verified": false,
//                         "sub": "6c9653cb-b670-48e2-8bbc-dd602fa81c7d"
//                     },
//                     "provider": "email",
//                     "last_sign_in_at": "2024-07-29T21:18:04.854305Z",
//                     "created_at": "2024-07-29T21:18:04.854359Z",
//                     "updated_at": "2024-07-29T21:18:04.854359Z",
//                     "email": "seancraggles@gmail.com"
//                 }
//             ],
//             "created_at": "2024-07-29T21:18:04.843779Z",
//             "updated_at": "2024-07-30T16:11:14.979683Z",
//             "is_anonymous": false
//         }
//     }
// }