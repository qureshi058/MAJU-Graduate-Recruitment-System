import Header from "./Components/Header/Header";
// import {Link} from 'react-router-dom'
import Routes from "./Route/PublicRoutes";
import "./App.css";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <ToastContainer autoClose={3000} />
    </div>
    
  );
}

export default App;
