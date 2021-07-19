import { useEffect } from 'react'
import Header from "./Components/Header/Header";
// import {Link} from 'react-router-dom'
import Routes from "./Route/PublicRoutes";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import { auth, firestore } from './Components/firebase/firebase'
import { connect } from 'react-redux'
import { userStateChange } from './Components/Redux/actions/companyActions'
import { FlashOnRounded } from '@material-ui/icons';

function App(props) {
  const { userState,currentUser }=props
 
  // useEffect function --------------------
  useEffect(() => {
    
    auth.onAuthStateChanged((user) => {
    
      if (user) {
        firestore.collection("Users").doc(user.uid).get()
          .then(doc => {userState({isActive:true,...doc.data()})
          console.log(currentUser)  })
          .catch(error => alert(error))
      }
      else {
        userState({
          isActive: false
        })
      }
    }
    )
  },[])
return (
  <div className="App">
    <Header />
    <Routes />
    <ToastContainer autoClose={3000} />
  </div>

);
}
const mapStateToProps = (state) => ({
  currentUser: state.company.currentUser
}
)
const mapDispatchToProps = (dispatch) => ({
  userState: (userData) => { dispatch(userStateChange(userData)) }
}
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
