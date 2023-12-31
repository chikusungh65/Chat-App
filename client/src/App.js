import React, {useState} from "react";
import Chat from "/components/Chat/Chat"


import "./App.css"
import LoginForm from "./components/Login/LoginForm";


const App = () =>{
  const [userData, setUserData] = useState(null);

  if(userData === null){
    return (
      <div className="container">
        <div className="container-title">Welcome to our Chat App</div>
        <LoginForm
          setUserDataForChat={setUserData}
        />
      </div>
    )
  }
  return (
    <Chat
      currentUserData={userData}
    />
  );
}

export default App;