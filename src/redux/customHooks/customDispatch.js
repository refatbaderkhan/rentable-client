import { useDispatch } from "react-redux";

export const useCustomDispatch = () => {

  const dispatch = useDispatch();
  
  const setUser = (user) => dispatch({ type: "user/setUser", payload: user });

  const deleteUser = () => dispatch({ type: "user/deleteUser" });

  const setSocket = (socket) => dispatch({ type: "socket/setSocket", payload: socket });

  const setCoordinates = (coordinates) => dispatch({ type: "coordinates/setCoordinates", payload: coordinates });

  const setChat = (chat) => dispatch({ type: "chat/setChat", payload: chat });

  const setCategories = (categories) => dispatch({ type: "category/setCategories", payload: categories });

  const addCategory = (category) => dispatch({ type: "category/addCategory", payload: category });

  const deleteCategory = (category_id) => dispatch({ type: "category/deleteCategory", payload: category_id });

  const addSubCategory = (subCategory, category_id) => dispatch({ type: "category/addSubCategory", payload: {subCategory, category_id} });

  const deleteSubCategory = (subCategory_id, category_id) => dispatch({ type: "category/deleteSubCategory", payload: {subCategory_id, category_id} });

  const setCities = (cities) => dispatch({ type: "city/setCities", payload: cities });

  const addCity = (city) => dispatch({ type: "city/addCity", payload: city });

  const deleteCity = (city_id) => dispatch({ type: "city/deleteCity", payload: city_id });
  
  const addArea = (area, city_id) => dispatch({ type: "city/addArea", payload: {area, city_id} });

  const deleteArea = (deletedArea, city_id) => dispatch({ type: "city/deleteArea", payload: {deletedArea, city_id} });

  return {
    setUser, 
    deleteUser,
    setSocket, 
    setCoordinates, 
    setChat, 
    setCategories, 
    addCategory,
    deleteCategory,
    addSubCategory,
    deleteSubCategory,
    setCities,
    addCity,
    deleteCity,
    addArea,
    deleteArea
  }
}