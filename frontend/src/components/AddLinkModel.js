import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../store/toggleAddLinkModelSlice";
import { Form, useActionData, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AddLinkModel() {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const visibilty = useSelector((state) => state.addLinkModel.value);
  const user = useSelector((state) => state.user.value);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const data = useActionData();

  useEffect(() => {
    if (data !== null) {

      setIsSubmiting(false);

      if (
        data !== null &&
        typeof data === "object" &&
        data.hasOwnProperty("error")
      ) {
        
        setIsSubmiting(false);
      }

      if (
        data !== null &&
        typeof data === "object" &&
        data.hasOwnProperty("message")
      ) {
        
        dispatch(toggle());
        
      }
    }
  }, [data, dispatch, navigate]);

  const handleSubmit = (event) => {
    setIsSubmiting(true);
  };

  return (
    <div className={`add-link-model-container ${visibilty ? "visible" : "hidden"}`}>
      <div className="add-link-popup-model">
        <header>
          <AiOutlineClose
            onClick={() => dispatch(toggle())}
            className="popup-close-icon"
          />
          <h4>Create your own Linktree</h4>
          <span>The only link in bio trusted by 35M+ people.</span>
        </header>
        <hr />

        <div className="add-link-form-container">
          <Form
            className="add-link-form"
            method="post"
            action="/"
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
      </div>
    </div>
  );
}


export const addLinkAction = async ({ request }) => {

  const data = await request.formData();

  const url = process.env.REACT_APP_BACKEND_API_URL + "/links";

  const token = data.get("token")
  const submition = {
    title: data.get("title"),
    url: data.get("url"),
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
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