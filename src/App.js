import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import { Navigate } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';

export default function App() {
  return (
    <Router>
      <div className="Container mx-auto px-10 py-8 min-h-screen w-full">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />

          <Route path="*" element={<Navigate to="/register" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
