import logo from "../tappa.png";
import { Form, useActionData } from "react-router-dom";

export default function Signup() {
  const data = useActionData();

  return (
    <div>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="body-container">
        <h1>Create your account</h1>

        <Form method="post" action="/signup">
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

        {data && data.error && <span>{data.error}</span>}
      </div>
    </div>
  );
}

export const singupAction = async ({ request }) => {
  // TODO: implement signup logic here...
  const data = await request.formData();

  const url = process.env.REACT_APP_BACKEND_API_URL + "/auth/signup";

  const submition = {
    name: data.get("name"),
    email: data.get("email"),
    password: data.get("password"),
  };

  if (submition.password.length < 8) {
    return { error: "Password must be 8 characters or long." };
  }

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
    
      if (data.code === '201'){
        return { error: 'User created successfuly.' };
      }

      return { error: data.error };

    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {

    return { error: error.message };
  }
};
