import React, { useState } from "react";
import styles from "../components/login.module.css";

function LoginForm() {
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleSubmit = () => {
    alert(`Email = ${login.email}\npassword = ${login.password}`);
  };
  return (
    <>
      <div className={styles.form}>
        <h2>Login</h2>
        <br />
        <form>
          <label>Email</label>
          <br />
          <input
            type={"login.email"}
            value={login.email}
            name="email"
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          <br />
          <br />

          <label>Password</label>
          <br />
          <input
            type={"login.password"}
            value={login.password}
            name="password"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <br />
          <br />

          <button onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
