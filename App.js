import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        
        <Route  path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;
