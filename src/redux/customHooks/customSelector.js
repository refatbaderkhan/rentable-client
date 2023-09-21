import { useSelector } from "react-redux";

export const useCustomSelector = () => {
  
    const user = useSelector((state) => state.user.user);

    const user_id = useSelector((state) => state.user.user._id);
  
    const socket = useSelector((state) => state.socket.socket);
  
    const coordinates = useSelector((state) => state.coordinates);
  
    const room_id = useSelector((state) => state.chat.room_id);

    const categories = useSelector((state) => state.category.categories);

  return {
    user,
    user_id,
    socket,
    coordinates,
    room_id,
    categories
  }
}