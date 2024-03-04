
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chat from './Components/Chat';
import Home from './Components/Home/Home'
import ChatRoom from './Components/ChatRoom';
import Message from './Components/Messages/Message';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import ChatData from './Components/ChatData/ChatData';
import { ChatUsers } from './userContext';
import MesssageScroll from './MessageScroll/MesssageScroll';
import ChatMessanger from './ChatMessanger/ChatMessanger';
import Profile from './Profile/Profile';
import Register from './Register/Register';
import Login from './Login/Login';
import Online from './Online/Online';




function App() {
  return (
    <BrowserRouter>
      <ChatUsers>
        <div className="App">

          <Sidebar />
          <Topbar />


          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home />} />
            <Route path='/chatroom' element={<ChatRoom />}/>
            <Route path='/chat' element={<Chat />} />
            <Route path='/message' element={<Message />} />
          
            <Route path='/chatdata' element={<ChatData />} />
            <Route path='/scroll' element={<MesssageScroll />} />
            <Route path='/chatmessenger' element={<ChatMessanger />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/online' element={<Online/>}/>



          </Routes>
        </div>
      </ChatUsers>
    </BrowserRouter>
  );

}

export default App;
