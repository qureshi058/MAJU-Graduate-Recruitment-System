import Header from "./Components/Header/Header";
// import {Link} from 'react-router-dom'
import Routes from "./Route/PublicRoutes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
