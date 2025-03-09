import Home from './Components/Home';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import AdminDashboard from './Components/AdminDashboard';
import AdminLogin from './Components/AdminLogin';
import AddMember from './Components/AddMember';
import AssignLocation from './Components/AssignLocation';
import MemberDashboard from './Components/MemberDashboard';
import MemberLocations from './Components/MemberLocations';
import AssignList from './Components/AssignList';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/adminlogin" element={<AdminLogin/>}></Route>
          <Route path="/admindashboard" element={<AdminDashboard />}></Route>
          <Route path="/addmember"element={<AddMember/>}></Route>
          <Route path="/assignlocation" element={<AssignLocation/>}></Route>
          <Route path="/memberdashboard" element={<MemberDashboard/>}></Route>
          <Route path="/memberlocations" element={<MemberLocations/>}></Route>
          <Route path="/alllocations" element={<AssignList/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
