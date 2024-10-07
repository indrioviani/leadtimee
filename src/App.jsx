import React from 'react'; // Mengimpor React
import { Route, Routes, useLocation } from 'react-router-dom'; // Mengimpor komponen Route, Routes, dan useLocation
import DashboardPage from './pages/DashboardPage'; // Mengimpor halaman Siswa
import AssemblyProgressChart from './pages/AssemblyProgressChart';
import NavbarComponent from "./components/NavbarComponent";

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<DashboardPage />} /> {/* Rute untuk halaman login */}
        <Route path="/gate1-4" element={<AssemblyProgressChart />} /> {/* Rute untuk halaman login */}
      </Routes>
    </div>
  );
};

export default App; // Mengekspor komponen App
