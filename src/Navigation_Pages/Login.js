import React from "react";
import "./Login.css";
import { useState, useRef, useContext } from "react";
import AuthContext from "../Context/auth-context";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const navigate=useNavigate();
  const authCtx=useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const[isLoading,setIsLoading]=useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
     let url;
    if(isLogin){
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBh56bONcm3xln945O0iZN6vdJ9EFOGuSA';
    }else{
      url= 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBh56bONcm3xln945O0iZN6vdJ9EFOGuSA';
    }
    fetch(url,
        {
          method:'POST',
          body:JSON.stringify({
            email:enteredEmail,
            password:enteredPassword,
            returnSecureToken:true
          }),
          headers:{
            'Content-Type':'application/json'
          },
        }
      ).then((res)=>{
        setIsLoading(false);
        if(res.ok){
           return res.json();
        }else{
         return res.json().then((data)=>{
          let errorMessage='Authentication failed';
         if (data && data.error && data.error.message) {
           errorMessage = data.error.message;
        }
          alert(errorMessage);
         throw new Error(errorMessage);
         })
     }
      }).then(data=>{
        authCtx.login(data.idToken,enteredEmail);
        isLogin && navigate('/store');
      })
        .catch(err=>{
          alert(err.message);
        })
    }
    return(
         <section className="auth">
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className="control">
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordInputRef} />
        </div>
        <div className="actions">
          {!isLoading && <button>{isLogin ? "Login" : "Create Account"}</button>}
          {isLoading && <p>Sending request...</p>}

          <button
            type="button"
            className="toggle"
            onClick={switchAuthModeHandler}
          >
            {isLogin
              ? "Create new account"
              : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
    )
}
export default Login;