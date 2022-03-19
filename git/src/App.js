import "./App.css";
import Header from "./Header";
import Main from "./Main";
import { Provider } from "react-redux";
import { store } from "./store/restaurant/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header></Header>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
