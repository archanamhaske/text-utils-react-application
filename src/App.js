import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');

      document.body.style.backgroundColor='black';

      document.body.style.color='white';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
   
 
 <BrowserRouter>
   <Navbar mode={mode} toggleMode={toggleMode} title="AM" homeText="Home" aboutText="About" contactText="Contact" />
   <Alert alert={alert} />
   <div className="container my-3">
     <Routes>
       <Route
         exact
         path="/"
         element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" />}
       />
       <Route exact path="/about" element={<About />} />
     </Routes>
   </div>
 </BrowserRouter>
     
  
  );
}

export default App;
