import { useSelector } from "react-redux";

export const useCustomSelector = () => {
  
    const user = useSelector((state) => state.user.user);

    const user_id = useSelector((state) => state.user.user._id);
  
    const socket = useSelector((state) => state.socket.socket);

    const items = useSelector((state) => state.items.items);

    const chatId = useSelector((state) => state.chat.room_id);
    
    const chats = useSelector((state) => state.chats.chats);

    const item = (item_id) => { return items.find((item) => item._id === item_id);}

    const search = useSelector((state) => state.search.search);

    const coordinates = useSelector((state) => state.coordinates);
  
    const room_id = useSelector((state) => state.chat.room_id);

    const users = useSelector((state) => state.users.users);

    const getUserById = (user_id) => { return users.find((user) => user._id === user_id);}

    const getUser = (user_id) => { return users.find((user) => user._id === user_id);}

    const getUserItems = (user_id) => { return items.filter((item) => item.user_id === user_id);}

    const categories = useSelector((state) => state.category.categories);

    const cities = useSelector((state) => state.city.cities);
    
    const alert = useSelector((state) => state.alert.alert);

  return {
    user,
    user_id,
    socket,
    item,
    items,
    chatId,
    chats,
    search,
    coordinates,
    room_id,
    users,
    getUserById,
    getUser,
    getUserItems,
    categories,
    cities,
    alert,
  }
}