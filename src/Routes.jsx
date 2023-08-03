
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {HomePage} from './pages/HomePage/homePage';
import LoginPage from './pages/LoginPage/LoginPage';
import MedResult from './pages/MedResult/medResult';
import PostoPage from './pages/PostoPage/PostoPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MedRegister from './pages/MedRegister/MedRegister';

const Routex = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/pesquisaMed" element={<MedResult/>} />
        <Route path="/inicial" element={<PostoPage/>} />
        <Route path="/cadastro" element={<RegisterPage/>} />
        <Route path="/cadastroMedicamento" element={<MedRegister/>} />
      </Routes>
    </Router>
  );
};

export default Routex;
