import logo from "../tappa.png";
import { Form } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="body-container">
        <h1>Create your account</h1>
        <Form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <p>
              By clicking Create account, you agree to Linktree's Terms and
              Conditions and confirm you have read our Privacy Notice. You may
              receive offers, news and updates from us.
            </p>
          </div>

          <button className="signup-submit-btn">Submit</button>
        </Form>
      </div>
    </div>
  );
}
