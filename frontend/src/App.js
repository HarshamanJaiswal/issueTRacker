// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import { BrowserRouter,Route,Routes,Link} from "react-router-dom";
import RegistrationForm from './components/RegistrationForm';


function App() {
  return (
    <div>
    
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route element={<Login></Login>} path="/"/>
      <Route element={<RegistrationForm></RegistrationForm>} path="register"/>
    </Routes>
   </BrowserRouter>

  </div>
  );
}

export default App;
