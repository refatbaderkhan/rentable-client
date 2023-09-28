import {React , useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from '../../components/ui/NavBar';
import Login from '../../pages/Authentication/Login';
import Register from "../../pages/Authentication/Register";
import Landing from "../../pages/Landing";
import CreateItem from "../../pages/CreateItem";
import Items from "../../pages/Items";
import Chat from "../../pages/Chat";
import Item from "../../pages/Item";
import Profile from '../../pages/Profile';
import {OnLoad} from '../config/onLoad';
import { useCustomSelector } from '../../redux/customHooks/customSelector';
import AdminDashboard from '../../pages/AdminDashboard';

const AppRoutes = () => {

  OnLoad();

  const {user} = useCustomSelector();

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
          <Route path="/add-item" element={<CreateItem />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/items" element={<Items />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/admin-dashboard" element={authenticatedRoute(AdminDashboard)} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes