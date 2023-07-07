import logo from "../tappa.png";
import { Form } from "react-router-dom";
export default function Settings() {
  return (
    <div className="setting-container">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="Setting-main">
        <h2>Settings</h2>

        <Form className="settings-form">
          <div className="settings-form-group">
            <label>Page Title :</label>
            <input type="text" />
          </div>

          <div className="settings-form-group">
            <label>Subtitle :</label>
            <input type="text" />
          </div>

          <div className="settings-form-group">
            <label>Background Color :</label>
            <input type="color" id="colorPicker" name="colorPicker" />
          </div>

          <div className="settings-form-group">
            <label for="themeSelect">Select a theme :</label>
            <select id="themeSelect" name="theme">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div className="settings-form-group">
            <label for="imageUpload">Upload Logo (.png) Image:</label>
            <input
              type="file"
              id="imageUpload"
              name="imageUpload"
              accept="image/png"
            ></input>
          </div>
          <div className="settings-form-group"><button className="save-settings-btn">Save Changes</button></div>
          
        </Form>
      </div>
    </div>
  );
}
