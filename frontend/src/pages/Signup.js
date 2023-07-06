import logo from "../tappa.png";
import { Form, useActionData } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Signup() {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const data = useActionData();
  // Enable submit button when response is received
  useEffect(() => {
    if (data !== null) {
      setIsSubmiting(false);
    }
  }, [data]);

  const handleSubmit = (event) => {
    setIsSubmiting(true);
  };

  return (
    <div>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="body-container">
        <h1>Create your account</h1>

        <Form method="post" action="/signup" onSubmit={handleSubmit}>
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

          <button disabled={isSubmiting} className="signup-submit-btn">
            Submit
          </button>
        </Form>

        {data && data.error && <span>{data.error}</span>}
        {data && data.message && <span>{data.message}</span>}
      </div>
    </div>
  );
}

export const singupAction = async ({ request }) => {
  
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

      return data;

    } else {

      const data = await response.json();
      throw new Error(data.error);
    }
  } catch (error) {
    return { error: error.message };
  }
};
