import "./styles/App.css";
import "./styles/utilities.css";
import "./styles/colors.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/ui/NavBar";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import CreateItem from "./pages/CreateItem";
import Chat from "./pages/Chat";
import ChatPage from "./components/ui/Chat/ChatPage";
import AdminCategoryManagement from "./pages/Admin/AdminCategoryManagement/AdminCategoryManagement";
import AdminLocationManagement from "./pages/Admin/AdminUserManagement/AdminLocationManagement";
import { Provider } from "react-redux";
import reduxStore from "./redux/store";


function App() {

  return (
    <Provider store={reduxStore}>
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/add-item" element={<CreateItem />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat-page" element={<ChatPage />} />
          <Route path="/category-management" element={<AdminCategoryManagement />} />
          <Route path="/location-management" element={<AdminLocationManagement />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}


export default App;
