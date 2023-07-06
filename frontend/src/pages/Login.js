import logo from "../tappa.png";
import { Form, useActionData} from "react-router-dom";

export default function Login() {
  const data = useActionData();

  return (
    <div>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="body-container">
        <h1>Sign in</h1>
        <Form method="post" action="/login">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <hr className="login-divider" />
          <button className="login-submit-btn">Login</button>
        </Form>
        {data && data.error && <span>{data.error}</span>}
        {data && data.message && <span>{data.message}</span>}
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

      return data

    } else {

      const data = await response.json();

      throw new Error(data.error);
    }
  } catch (error) {
    return { error: error.message };
  }
};
