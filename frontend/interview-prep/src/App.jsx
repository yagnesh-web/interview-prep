import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Home/Dashboard';
import InterviewPrep from './pages/InterviewPrep/InterviewPrep';
import UserProvider from './context/userContext';

const App = () => {
  return (
      <UserProvider>
        <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> {/* fixed */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/interview-prep/:sessionId" element={<InterviewPrep />} />
        </Routes>

        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize: "13px",
            },
          }}
        />
        </Router>
      </UserProvider>
  );
};

export default App;
