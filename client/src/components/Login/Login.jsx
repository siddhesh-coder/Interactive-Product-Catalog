import React, { useState } from "react";
import "./auth.css";
import InputControl from "../InputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import useNotification from "../../hooks/useNotification";

const Login = () => {
  
  const navigate = useNavigate();

  const [values, setValue] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(false);
  const notify = useNotification({ message: "Login successfully ✅" });

  const handleSubmission = () => {
    if (!values.email || !values.password) {
      setErrorMsg("please fill the required fields");
      return;
    }
    setErrorMsg("");

    setDisableSubmit(true);

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        setDisableSubmit(true);
        notify();
        navigate("/");
      })
      .catch((error) => {
        setDisableSubmit(false);
        setErrorMsg(error.message);
      });
  };
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <InputControl
          label={"Email"}
          placeholder="Jhondev123@gmail.com"
          onChange={(e) =>
            setValue((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <InputControl
          label={"Password"}
          placeholder="Enter Password"
          onChange={(e) =>
            setValue((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <div className="auth-footer">
          <b className="err-auth">{errorMsg}</b>
          <button onClick={handleSubmission} disabled={disableSubmit}>
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to={"/signup"}>Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
