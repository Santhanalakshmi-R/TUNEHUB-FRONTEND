import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Register from './Navigtions/Register';
import Login from './Navigtions/Login';
import Admin from './Navigtions/AdminHome';
import Customer from './Navigtions/CustomerHome';
import Payment from './Navigtions/Payment';
import DisplaySongs from './Navigtions/DisplaySongs';
import CreatePlaylist from './Navigtions/CreatePlaylist';
import ViewPlaylist from './Navigtions/ViewPlaylist';
import AddSongs from './Navigtions/AddSongs';
function App() {
  return (
    <div>
      
      <header className="App-header">
      <h1>hello from TuneHub</h1>
      <BrowserRouter>
       <Routes>
        <Route path='/map-reg' element={<Register/>}/>
        <Route path='/map-log' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/DisplaySongs' element={<DisplaySongs/>}/>
        <Route path='/createPlaylist' element={<CreatePlaylist/>}/>
        <Route path='/viewPlaylist' element={<ViewPlaylist/>}/>
        <Route path='/addsongs' element={<AddSongs/>}/>
       </Routes>
       <Link to='/map-reg' >click here to register</Link>
       <Link to='/map-log' >click here to login</Link>
       </BrowserRouter>
      </header> 
    </div>
  );
}

export default App;
