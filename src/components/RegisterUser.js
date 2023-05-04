import React, { useCallback, useState } from "react";
import styles from "../components/login.module.css";

function RegisterUser() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Date, setDate] = useState("");

  const handleSubmit = () => {
    alert(
      `UserName = ${userName}\nEmail = ${email}\nPhone = ${Phone}\nDate = ${Date}`
    );
  };

  const handleUserName = useCallback(
    (e) => {
      setUserName(e.target.value);
    },
    [userName]
  );

  const handlePhone = useCallback(
    (e) => {
      setPhone(e.target.value);
    },
    [Phone]
  );

  const handleEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [email]
  );

  //   const handleDate = useCallback(
  //     (e) => {
  //       setDate(e.target.value);
  //     },
  //     [Date]
  //   );

  const handleDate = useCallback(
    (e) => {
      setDate(e.target.value);
    },
    [Date]
  );

  return (
    <form>
      <label className={styles.label}>Username</label>
      <br />
      <input type={"text"} onChange={(e) => handleUserName(e)} />
      <br />
      <br />

      <label>Email</label>
      <br />
      <input type={"email"} onChange={(e) => handleEmail(e)} />
      <br />
      <br />

      <label>Phone No.</label>
      <br />
      <input type={"number"} onChange={(e) => handlePhone(e)} />
      <br />
      <br />

      <label>DOB</label>
      <br />
      <input type={"datetime-local"} onChange={(e) => handleDate(e)} />
      <br />
      <br />

      <button onClick={handleSubmit}>Login</button>
    </form>
  );
}

export default RegisterUser;
