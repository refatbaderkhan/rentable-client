import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import Button from '../../base/Button';
import Input from '../../base/Input';
import './style.css'
import { localStorageAction } from '../../../core/config/localstorage'
import { useCustomDispatch } from '../../../redux/customHooks/customDispatch';
import { useCustomSelector } from '../../../redux/customHooks/customSelector';
import AdminProfileMenu from '../ProfileMenu/AdminProfileMenu'
import UserProfileMenu from '../ProfileMenu/UserProfileMenu'
import Alert from '../Alert'


const NavBar = () => {

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

  const [searchTerm, setSearchTerm] = useState("")
  const handleSearch = (searchTerm) => {
    setSearch({search: searchTerm})
    navigate('/items')
  }

  useEffect(() => {
    if (alert) {
    setShowAlert(true);
    }
  }, [alert])

  

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
    <div>
      <Input
        placeholder = {"Search"}
        onChange={(value) => setSearch({search: value})}
        onEnter={handleSearch}
      />
    </div>
    <div>
      { !isLoggedIn && (
      <Button
        text = {"LOG IN"}
        textColor = {"white-text"}
        onClick = {() => navigate("/login")}
      />)}
      { isLoggedIn && (
        <div>
        <div className="profile-avatar pointer white-text green-bg" onClick={toggleProfile}>
          { user.profile_picture ? (
            <img src={`http://127.0.0.1:8000/uploads/${user.profile_picture}`} alt="profile" className='profilepicture'/>
          ) : (
            <span className="profile-letter">
              {user.first_name[0]}
            </span>
          )}
        </div>
        </div>
      )}
    </div>
    </div>
    </div>
    { isLoggedIn && profileToggle && user.user_type == 0 && (
      <div className="navbar-menu ">
      < AdminProfileMenu handleLogout={handleLogout} setProfileToggle={setProfileToggle}/>
      </div>
      )}
    { isLoggedIn && profileToggle && user.user_type == 1 && (
      <div className="navbar-menu ">
      < UserProfileMenu handleLogout={handleLogout} setProfileToggle={setProfileToggle}/>
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