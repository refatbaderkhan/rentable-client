import { useDispatch } from "react-redux";

export const useCustomDispatch = () => {

  const dispatch = useDispatch();
  
  const setUser = (user) => dispatch({ type: "user/setUser", payload: user });

  const setSocket = (socket) => dispatch({ type: "socket/setSocket", payload: socket });

  const setCoordinates = (coordinates) => dispatch({ type: "coordinates/setCoordinates", payload: coordinates });

  const setChat = (chat) => dispatch({ type: "chat/setChat", payload: chat });

return { setUser, setSocket, setCoordinates, setChat }
}