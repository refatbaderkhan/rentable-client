import { React, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import Button from '../../base/Button';
import Input from '../../base/Input';
import './style.css'
import { localStorageAction } from '../../../core/config/localstorage'
import { useCustomDispatch } from '../../../redux/customHooks/customDispatch';
import { useCustomSelector } from '../../../redux/customHooks/customSelector';
import ProfileMenu from '../ProfileMenu'
import Alert from '../Alert'


const NavBar = () => {

  const location = useLocation();

  const navigate = useNavigate();

  const [isLoggedIn , setIsLoggedIn] = useState(localStorageAction("access_token"));
  const [profileToggle, setProfileToggle] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const {user, alert} = useCustomSelector();

  const {deleteUser} = useCustomDispatch();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    deleteUser();
    setIsLoggedIn(null);
    setProfileToggle(false);
    navigate("/");
  }

  const toggleProfile = () => {
    setProfileToggle((prevProfileToggle) => !prevProfileToggle);
  }

  const navigateAndToggle = (path) => {
    navigate(path);
    setProfileToggle(false);
  }

  useEffect(() => {
    setIsLoggedIn(localStorageAction("access_token"));
  }, [localStorageAction("access_token")])

  const {setSearch} = useCustomDispatch();

  const handleSearch = () => {
    navigate('/items')
  }

  useEffect(() => {
    if (alert) {
    setShowAlert(true);
    }
  }, [alert])


  if (location.pathname === '/register' || location.pathname === '/login') {
    return null;
  }


  return (
    <div>
    <div>
    <div className="navbar flex">
    <div className ="navbar-container flex">
    <div className = "logo pointer">
      <span
      className = "logo-text"
      onClick={() => navigateAndToggle("/")}
      >
        <img src={logo} alt="logo" className="logo-img"/>
      </span>
    </div>
    { location.pathname !== '/items' && location.pathname !== '/admin-dashboard' && (
    <div className='search-bar'>
      <div className='search-bar-search'>
      <Input
        placeholder = {"Enter your search"}
        onChange={(value) => setSearch({search: value})}
      />
      </div>
      <div className='search-bar-button'>
      <Button
        style={"NavBar"}
        text = {"Search"}
        onClick={handleSearch}
      />
      </div>
    </div>
    )}
    <div className='navbar-login'>
      { !isLoggedIn && (
      <Button
        text = {"Login"}
        style={"NavBar"}
        onClick = {() => navigate("/login")}
      />)}
      { isLoggedIn && (
        <div>
        <div className="nav-profile-avatar pointer white-text green-bg" onClick={toggleProfile}>
          { user.profile_picture ? (
            <img src={`http://127.0.0.1:8000/uploads/${user.profile_picture}`} alt="profile" className='nav-profilepicture'/>
          ) : (
            <span className="nav-profile-letter">
              {user.first_name[0]}
            </span>
          )}
        </div>
        </div>
      )}
    </div>
    </div>
    </div>
    { isLoggedIn && profileToggle && (
      <div className="navbar-menu ">
      < ProfileMenu handleLogout={handleLogout} setProfileToggle={setProfileToggle}/>
      </div>
      )}
    </div>
    {showAlert && (
      <div className="alert">
        <Alert 
        body={alert}
        />
      </div>
    )}
    </div>
  )
}

export default NavBar