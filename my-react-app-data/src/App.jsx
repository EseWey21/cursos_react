import StaticComponents from "./components/StaticComponents/StaticComponents"
import UserList from "./components/UserList/UserList"
import UserListWithLoading from "./components/UserListWithLoading/UserListWithLoading"
import './App.css';

function App() {

  return(
    <>
      {/* <StaticComponents/> */}
      {/* <UserList /> */}
      <UserListWithLoading />
    </>
  )
}

export default App
