import React, { useState } from "react";
import axios from "axios";
import "../css/Login.css";
import logo from "../Images/Nuke_logo_white.png"


export default function Login({ setIsLogin }) {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr("");
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/login", {
        email: user.email,
        password: user.password,
      });
      setUser({ name: "", email: "", password: "" });
      localStorage.setItem("tokenStore", res.data.token);
      setIsLogin(true);
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };

  return (
    <section className="login_bg">
    <div className="login_bg_dark">
      <img className="Nuke_logo_login" src={logo} />
      <form onSubmit={loginSubmit}>
        <input
          className="input_feild_dark"
          type="email"
          name="email"
          id="login-email"
          placeholder="Email"
          required
          value={user.email}
          onChange={onChangeInput}
        />
        <input
          className="input_feild_dark"
          type="password"
          name="password"
          id="login-password"
          placeholder="Password"
          required
          value={user.password}
          autoComplete="true"
          onChange={onChangeInput}
        />

        <div class="login-box">
          <div class="btn-box">
            <input class="login_btn" type="submit" name="btn" value="Login" />
            <span class="span_1"></span>
            <span class="span_2"></span>
            <span class="span_3"></span>
            <span class="span_4"></span>
          </div>
        </div>
      </form>
    </div>
    </section>
  );
}
