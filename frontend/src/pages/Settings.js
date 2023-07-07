import React, { useState } from "react";
import logo from "../tappa.png";
import { Form } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";

export default function Settings() {
  const user = useSelector((state) => state.user.value);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    backgroundColor: "",
    theme: "light",
  });
  const [data, setData] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const url = process.env.REACT_APP_BACKEND_API_URL + "/settings";

    const submission = {
      title: formData.title,
      subTitle: formData.subTitle,
      backgroundColor: formData.backgroundColor,
      theme: formData.theme,
      image: image,
    };

    try {
      const response = await axios.post(url, submission, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${user.token}`,
        },
      });

      const responseData = response.data;
      setData(responseData);
    } catch (error) {
      setData({ error: error.message });
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result.split(",")[1]);
      };
    }
  };

  return (
    <div className="setting-container">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="Setting-main">
        <h2>Settings</h2>

        <Form onSubmit={handleFormSubmit} className="settings-form">
          <div className="settings-form-group">
            <label>Page Title :</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>

          <div className="settings-form-group">
            <label>Subtitle :</label>
            <input
              type="text"
              value={formData.subTitle}
              onChange={(e) =>
                setFormData({ ...formData, subTitle: e.target.value })
              }
            />
          </div>

          <div className="settings-form-group">
            <label>Background Color :</label>
            <input
              type="color"
              id="colorPicker"
              name="colorPicker"
              value={formData.backgroundColor}
              onChange={(e) =>
                setFormData({ ...formData, backgroundColor: e.target.value })
              }
            />
          </div>

          <div className="settings-form-group">
            <label htmlFor="themeSelect">Select a theme :</label>
            <select
              id="themeSelect"
              name="theme"
              value={formData.theme}
              onChange={(e) =>
                setFormData({ ...formData, theme: e.target.value })
              }
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div className="settings-form-group">
            <label htmlFor="imageUpload">Upload Logo (.png) Image:</label>
            <input
              type="file"
              id="imageUpload"
              name="imageUpload"
              accept="image/png"
              onChange={handleFileChange}
            ></input>
          </div>
          <input type="hidden" name="token" value={user.token} />
          <div className="settings-form-group">
            <button className="save-settings-btn" type="submit">
              Save Changes
            </button>
          </div>
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
