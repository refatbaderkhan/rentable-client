import "./styles/App.css";
import "./styles/utilities.css";
import "./styles/colors.css";
import AppRoutes from "./core/routes";
import { Provider } from "react-redux";
import reduxStore from "./redux/store";


function App() {

  return (
    <Provider store={reduxStore}>
    <div className="App">
      <AppRoutes />
    </div>
    </Provider>
  );
}


export default App;
