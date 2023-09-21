import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from '../../components/ui/NavBar';
import Login from '../../pages/Authentication/Login';
import Register from "../../pages/Authentication/Register";
import Landing from "../../pages/Landing";
import Profile from "../../pages/Profile";
import CreateItem from "../../pages/CreateItem";
import Chat from "../../pages/Chat";
import ChatPage from "../../components/ui/Chat/ChatPage";
import AdminCategoryManagement from "../../pages/Admin/AdminCategoryManagement/AdminCategoryManagement";
import AdminLocationManagement from "../../pages/Admin/AdminUserManagement/AdminLocationManagement";
import AdminDisplayUsers from "../../components/ui/Admin/AdminUserManagement/AdminDisplayUsers";
import { Navigate } from "react-router-dom";

const AppRoutes = () => {

  const [user_type, setUserType] = useState(1);
  const authenticatedRoute = (Component) => {
    if (user_type == 0) {
      return <Component />
    } else {
      return <Navigate to="/login" />
    }
  }

  return (
    <div>
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
          <Route path="/users-management" element={authenticatedRoute(AdminDisplayUsers)} />
          <Route path="/category-management" element={<AdminCategoryManagement />} />
          <Route path="/location-management" element={<AdminLocationManagement />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes