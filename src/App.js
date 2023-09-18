import "./styles/App.css";
import "./styles/utilities.css";
import "./styles/colors.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/ui/NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import CreateItem from "./pages/CreateItem";
import Chat from "./pages/Chat";
import ChatPage from "./components/ui/Chat/ChatPage";
import io from "socket.io-client";

const socket = io.connect("http://127.0.0.1:4000");


function App() {
  const [user_id, setUser_id] = useState("");
  const [room_id, setRoom_id] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/add-item" element={<CreateItem />} />
          <Route path="/chat" element={<Chat
            user_id={user_id}
            room_id={room_id}
            socket={socket}
            setUser_id={setUser_id}
            setRoom_id={setRoom_id}
          />} />
          <Route path="/chat-page" element={<ChatPage
            user_id={user_id}
            socket={socket}
            room_id={room_id}
          />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
