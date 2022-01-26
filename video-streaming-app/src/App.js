import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Login'; 
import Register from './components/Register';
import Videos from './components/Videos';
import Videoplayer from './components/Videoplayer';

function App() {
  return (
    <div className="App">
       
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/videos" element={<Videos/>}/> 
        <Route path="/player/:video_id" element={<Videoplayer/>}/>
      </Routes>
    </BrowserRouter>
      



    </div>
  );
}

export default App;
