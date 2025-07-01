
import ProtectedRoute from "./protectedRoutes";

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/home";
import SignIn_up from "./pages/signIn_up";
import Bot from "./pages/chabot"; 
import Learn from "./pages/learningHub";
import Report from "./pages/report";
import Profile from "./pages/profile";
import Layout from "./layout";
import ReportsTable from "./pages/schoolRepport";
import Students from "./pages/students"
import StudentManagement from "./pages/createUser"
import { AuthProvider } from "./authcontext";
import Dash from'./pages/dashboard' 
import Guide from "./pages/GuidingHub";
function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Routes>
       <Route path='/sign' element={<SignIn_up/>}></Route>
      <Route element={<Layout />}>
     <Route path='/GuidingHub' element={<Guide/>}/>
        <Route path='/learningHub' element={<Learn/>}></Route>
         
         <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>

    
      <Route path='/create' element={<StudentManagement/>}/>
  </Route>
        
      <Route  path='/' element={<Home/>}></Route>
      <Route element={<ProtectedRoute allowedRoles={["Admin","SchoolPsychologist"]} />}>

    
      <Route path="/dash" element={<Dash/>}/>
  </Route>
     <Route element={<ProtectedRoute allowedRoles={["Child"]} />}>

      <Route  path='/profile' element={<Profile/>}></Route>
  
  
   
      <Route path='/chat' element={<Bot/>}></Route>
       <Route path='/report' element={<Report/>}></Route>
  </Route>
     <Route element={<ProtectedRoute allowedRoles={["SchoolPsychologist"]} />}>
           <Route path="/schoolRepports" element={<ReportsTable/>}/>
              <Route path="/students" element={<Students/>}/>

</Route>
   </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;