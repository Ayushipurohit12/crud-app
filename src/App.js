import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Codeforinterview from './components/Codeforinterview';
import Allusers from './components/Allusers';
import AddUser from './components/AddUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUsers from './components/EditUsers';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Codeforinterview />} />
        <Route path="/all" element={<Allusers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUsers />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
