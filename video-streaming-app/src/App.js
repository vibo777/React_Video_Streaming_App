import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Login'; 
import Register from './components/Register';
import Videos from './components/Video';


function App() {
  return (
    <div className="App">
       
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/videos" element={<Videos/>}/> 
      </Routes>
    </BrowserRouter>
      



    </div>
  );
}

export default App;
