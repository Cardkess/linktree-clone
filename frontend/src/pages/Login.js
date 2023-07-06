import logo from "../tappa.png";
import { Form, NavLink, useActionData, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Login() {
  const data = useActionData();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSubmiting, setIsSubmiting] = useState(false);

  useEffect(() => {
    if (data !== null && typeof data === "object") {
      if (data.hasOwnProperty("error")) {
        setIsSubmiting(false);
      }

      if (data.hasOwnProperty("user")) {
        dispatch(setUser(data.user));
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    }
  }, [data, dispatch, navigate]);

  const handleSubmit = (event) => {
    setIsSubmiting(true);
  };

  return (
    <div>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="body-container">
        <h1>Sign in</h1>
        <Form method="post" action="/login" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              readOnly={isSubmiting}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              readOnly={isSubmiting}
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <hr className="login-divider" />
          <button disabled={isSubmiting} className="login-submit-btn">
            Login
          </button>

          <NavLink className="signup-link" to="/signup">
            Sign up
          </NavLink>
        </Form>
        {data && data.error && <span>{data.error}</span>}
        {data && data.message && (
          <div className="success-message-container">
            <FaCheckCircle className="success-badge" />
            <p className="success-message">{data.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export const loginAction = async ({ request }) => {
  const data = await request.formData();

  const url = process.env.REACT_APP_BACKEND_API_URL + "/auth/login";

  const submition = {
    email: data.get("email"),
    password: data.get("password"),
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submition),
    });

    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      const data = await response.json();

      throw new Error(data.error);
    }
  } catch (error) {
    return { error: error.message };
  }
};
