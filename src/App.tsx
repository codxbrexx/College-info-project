import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';

// Pages
import Home from './pages/Home';
import CollegeInfoPage from './pages/CollegeInfoPage';
import CoursesPage from './pages/CoursesPage';
import PlacementsPage from './pages/PlacementsPage';
import RankingsPage from './pages/RankingsPage';
import AlumniPage from './pages/AlumniPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import StudentDashboard from './pages/Student/StudentDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import NotFound from './pages/NotFound'; // New 404 page

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/info" element={<CollegeInfoPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/placements" element={<PlacementsPage />} />
              <Route path="/rankings" element={<RankingsPage />} />
              <Route path="/alumni" element={<AlumniPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<StudentDashboard />} /> {/* Default dashboard for students */}
              <Route path="/student-dashboard" element={<StudentDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
