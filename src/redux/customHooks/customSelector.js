import { useSelector } from "react-redux";

export const useCustomSelector = () => {
  
    const user = useSelector((state) => state.user);
  
    const socket = useSelector((state) => state.socket);
  
    const coordinates = useSelector((state) => state.coordinates);
  
    const chat = useSelector((state) => state.chat);

  return { user, socket, coordinates, chat }
}