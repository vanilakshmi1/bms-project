import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css'

function App() {
  return (
    <div>
     <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>

              
          </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
