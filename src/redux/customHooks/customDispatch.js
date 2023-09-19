import { useDispatch } from "react-redux";

export const useCustomDispatch = () => {

  const dispatch = useDispatch();
  
  const setUser = (user) => dispatch({ type: "user/setUser", payload: user });

  const setSocket = (socket) => dispatch({ type: "socket/setSocket", payload: socket });

  const setCoordinates = (coordinates) => dispatch({ type: "coordinates/setCoordinates", payload: coordinates });

  const setChat = (chat) => dispatch({ type: "chat/setChat", payload: chat });

  const setCategories = (categories) => dispatch({ type: "category/setCategories", payload: categories });

  const addCategory = (category) => dispatch({ type: "category/addCategory", payload: category });
  
return { setUser, setSocket, setCoordinates, setChat, setCategories, addCategory}
}