import { useSelector } from "react-redux";

export const useCustomSelector = () => {
  
    const user = useSelector((state) => state.user.user);

    const user_id = useSelector((state) => state.user.user._id);
  
    const socket = useSelector((state) => state.socket.socket);

    const items = useSelector((state) => state.items.items);

    const item = (item_id) => { return items.find((item) => item._id === item_id);}

    const search = useSelector((state) => state.search.search);

    const coordinates = useSelector((state) => state.coordinates);
  
    const room_id = useSelector((state) => state.chat.room_id);

    const users = useSelector((state) => state.users.users);

    const categories = useSelector((state) => state.category.categories);

    const cities = useSelector((state) => state.city.cities);

  return {
    user,
    user_id,
    socket,
    item,
    items,
    search,
    coordinates,
    room_id,
    users,
    categories,
    cities
  }
}