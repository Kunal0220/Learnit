import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Teacher from './Components/TeachersDashboard/Teacher'
import Student from './Components/StudentsDashboard/Students'
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom"
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';


function App() {
  return (
<>
<Navbar/>
      <Routes>
      <Route path="/student" element={<Student/>} />
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/log" element={<Login />} />
      <Route path="/sign" element={<Signup />} />
    </Routes>
</>


  );
}

export default App;
