import {React , useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from '../../components/ui/NavBar';
import Login from '../../pages/Authentication/Login';
import Register from "../../pages/Authentication/Register";
import Landing from "../../pages/Landing";
import Profile from "../../pages/Profile";
import CreateItem from "../../pages/CreateItem";
import Chat from "../../pages/Chat";
import ChatPage from "../../components/ui/Chat/ChatPage";
import DisplayItems from '../../components/ui/DisplayItems';
import Item from "../../pages/Item";
import AdminCategoryManagement from "../../pages/Admin/AdminCategoryManagement/AdminCategoryManagement";
import AdminLocationManagement from "../../pages/Admin/AdminUserManagement/AdminLocationManagement";
import AdminDisplayUsers from "../../components/ui/Admin/AdminUserManagement/AdminDisplayUsers";
import {OnLoad} from '../config/onLoad';
import { useCustomSelector } from '../../redux/customHooks/customSelector';

const AppRoutes = () => {

  OnLoad();

  const {user} = useCustomSelector();
  console.log(user.user_type)

  const authenticatedRoute = (Component) => {
    if (user.user_type == 0) {
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
          <Route path="/items" element={<DisplayItems />} />
          <Route path="/item" element={<Item />} />
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