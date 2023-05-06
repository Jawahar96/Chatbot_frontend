import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Chat from './Components/Chat';
import Home from './Components/Home/Home'
import ChatRoom from './Components/ChatRoom';
import Login from './Components/Login';
import Message from './Components/Messages/Message';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Rightbar from './Rightbar';
import ChatData from './Components/ChatData/ChatData';
import { ChatUsers } from './userContext';
import MesssageScroll from './MessageScroll/MesssageScroll';

function App() {
  return (
    <BrowserRouter>
    <ChatUsers>
    <div className="App">

      
      <Sidebar />
      <Topbar />
     
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home'  element={<Home/>}/>
      <Route path='/chatroom' element={<ChatRoom />}/>
       <Route path='/chat' element={<Chat />}/>
       <Route path='/message' element={<Message/>}/>
       <Route path='/chatdata' element={<ChatData/>}/>
       <Route path='/scroll' element={<MesssageScroll/>}/>

      </Routes>
      </div>
      </ChatUsers>
    </BrowserRouter>
  );
  
}

export default App;
