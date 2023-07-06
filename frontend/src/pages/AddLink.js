import logo from "../tappa.png";
import { FaCheckCircle } from "react-icons/fa";
// import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Form, useActionData, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AddLink() {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const user = useSelector((state) => state.user.value);

  const navigate = useNavigate();

  const data = useActionData();

  useEffect(() => {
    if (data !== null && typeof data === "object") {
      if (data.hasOwnProperty("error")) {
        setIsSubmiting(false);
      }

      if (data.hasOwnProperty("message")) {
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    }
  }, [data, navigate]);

  const handleSubmit = (event) => {
    setIsSubmiting(true);
  };

  return (
    <div>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="body-container">
        <h1>Add a Link</h1>

        <div className="add-link-form-container">
          <Form
            className="add-link-form"
            method="post"
            action="/add-link"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label>Title:</label>
              <input
                readOnly={isSubmiting}
                type="text"
                id="title"
                name="title"
                required
              />
            </div>
            <div className="form-group">
              <label>Url:</label>
              <input
                readOnly={isSubmiting}
                type="text"
                id="url"
                name="url"
                required
              />
            </div>
            <input type="hidden" name="token" value={user.token} />
            <button disabled={isSubmiting} className="login-submit-btn">
              Create Link
            </button>
          </Form>
        </div>

        {data && data.error && <span>{data.error}</span>}
        {data && data.message && (
          <div className="success-message-container">
            <FaCheckCircle className="success-badge" />
            <p className="success-message">{data.message}</p>
          </div>
        )}
        {data && data.message && (
          <span className="success-message">Redirecting to Login ...</span>
        )}
      </div>
    </div>
  );
}

export const addLinkAction = async ({ request }) => {
  const data = await request.formData();

  const url = process.env.REACT_APP_BACKEND_API_URL + "/links";

  const token = data.get("token");
  const submition = {
    title: data.get("title"),
    url: data.get("url"),
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
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
