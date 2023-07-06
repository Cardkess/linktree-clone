import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../store/toggleAddLinkModelSlice";
import { Form } from "react-router-dom";
import { useState } from "react";

export default function AddLinkModel() {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const visibilty = useSelector((state) => state.addLinkModel.value);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    setIsSubmiting(true);
  };

  return (
    <div className={`model-container ${visibilty ? "visible" : "hidden"}`}>
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
            action="/login"
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
              <label>Link:</label>
              <input
                readOnly={isSubmiting}
                type="text"
                id="link"
                name="link"
                required
              />
            </div>
            <button disabled={isSubmiting} className="login-submit-btn">
              Create Link
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
