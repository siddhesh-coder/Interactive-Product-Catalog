import React, { useState } from "react";
import InputControl from "../InputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import useNotification from "../../hooks/useNotification";

const SignUp = () => {
  const navigate = useNavigate();

  const [values, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(false);

  const notify = useNotification({ message: "Signup successfully ✅" });

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.password) {
      setErrorMsg("please fill the required fields");
      return;
    }
    setErrorMsg("");

    setDisableSubmit(true);

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setDisableSubmit(true);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
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
        <h2>Sign Up</h2>
        <InputControl
          label={"Name"}
          placeholder="Jhon dev"
          onChange={(e) =>
            setValue((prev) => ({ ...prev, name: e.target.value }))
          }
        />
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
            Sign Up
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to={"/login"}>Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
