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
import AdminCategoryManagement from "../../pages/Admin/AdminCategoryManagement/AdminCategoryManagement";
import AdminLocationManagement from "../../pages/Admin/AdminUserManagement/AdminLocationManagement";
import AdminDisplayUsers from "../../components/ui/Admin/AdminUserManagement/AdminDisplayUsers";
import io from "socket.io-client";
import { localStorageAction } from '../config/localstorage';
import { sendRequest } from '../config/request';
import { requestMethods } from '../enums/requestMethods';
import { useCustomDispatch } from '../../redux/customHooks/customDispatch';

const AppRoutes = () => {

  const socket = io.connect("http://127.0.0.1:4000");
  
  const {setCategories, setSocket, setUser, setCities, setUsers} = useCustomDispatch();

  setSocket({socket: socket});

  const account = async () => {

    if (!localStorageAction("access_token")) {
      return;
    }

    try {
      const response = await sendRequest({
        method: requestMethods.GET,
        route: "/user/account",
      });
    
      setUser({user: response});
     
      return response.data;
    }
    catch (error) {
      console.log(error);
    }

  }


  const users = async () => {

    try {
      const response = await sendRequest({
        method: requestMethods.GET,
        route: "/account",
      });

      setUsers({users: response});

      return response;
    }

    catch (error) {
      console.log(error);
    }
  }


  const category = async () => {

    try {
      const response = await sendRequest({
        method: requestMethods.GET,
        route: "/categories",
      });

      setCategories({categories: response});
      
      return response.data;
    }
    catch (error) {
      console.log(error);
    }
  }

  const cities = async () => {
    try {
      const response = await sendRequest({
        method: requestMethods.GET,
        route: "/cities",
      });

      setCities({cities: response});

      return response.data;
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    account();
    users();
    category();
    cities();
  }, [])


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