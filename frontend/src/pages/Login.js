import logo from "../tappa.png";
import { Form } from "react-router-dom";

export default function login() {
  return (
    <div>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="body-container">
        <h1>Sign in</h1>
        <Form>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <hr className="login-divider"/>
          <button className="login-submit-btn">Login</button>
        </Form>
      </div>
    </div>
  );
}
