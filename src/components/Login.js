import React, { useState } from "react";
import styles from "../components/login.module.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    alert(`UserName = ${userName}\nEmail = ${email}\nPassword = ${password}`);
  };
  return (
    <>
      <div className={styles.form}>
        <h2>Login</h2>
        <br />
        <form>
          <label className={styles.label}>Username</label>
          <br />
          <input type={"text"} onChange={(e) => setUserName(e.target.value)} />
          <br />
          <br />

          <label>Email</label>
          <br />
          <input type={"email"} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <br />

          <label>Password</label>
          <br />
          <input
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />

          <button onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
