import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/auth/login/Login'
import Dashboard from "./components/library/dashboard/Dashboard"
import NotFound from './components/ui/confirmDeleteModal/notFound/NotFound'
import Protected from './components/auth/protected/Protected'




  function App() {

    const [loggedIn, setLoggedIn] = useState(false);
  
    const handleLogIn = () => {
      setLoggedIn(true);
    }
  
    const handleLogOut = () => {
      setLoggedIn(false);
    };
  

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login onLogin={handleLogIn} />} />
  
          <Route element={<Protected isSignedIn={loggedIn} />}>
            <Route path="/library/*" element={<Dashboard onLogout={handleLogOut} />} />
          </Route>
  
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
export default App;