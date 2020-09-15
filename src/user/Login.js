import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-e3233.appspot.com/o/images%2F%E2%80%94Pngtree%E2%80%94whatsapp%20social%20media%20icon%20whatsapp_3572477.png?alt=media&token=86a2cb9e-cc77-4564-84fc-0c379028492f"
          alt="what's app logo"
        />
        <div className="login__text">
          <h1>Sign into WhatsApp</h1>
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
};

export default Login;
