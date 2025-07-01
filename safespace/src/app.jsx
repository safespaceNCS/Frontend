
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
function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Routes>
      <Route path="/schoolRepports" element={<ReportsTable/>}/>
        <Route  path='/Sign' element={<SignIn_up/>}></Route>
      <Route element={<Layout />}>
      <Route  path='/' element={<Home/>}></Route>
   <Route path="/students" element={<Students/>}/>
     {/* <Route element={<ProtectedRoute allowedRoles={["teen"]} />}> */}

      <Route  path='/profile' element={<Profile/>}></Route>
  
  
      <Route path='/learningHub' element={<Learn/>}></Route>
      <Route path='/chat' element={<Bot/>}></Route>
       <Route path='/report' element={<Report/>}></Route>
  {/* </Route> */}
   </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;