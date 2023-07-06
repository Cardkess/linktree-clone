import NavItem from "../components/NavItem";
import logo from "../tappa.png";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="title-section">
        <p>Tappa SA - {user.name}</p>
        <p>South Africas Leading NFC smart business card manufacturer</p>
      </div>

      <NavItem text='Visit Our Website'/>
      <NavItem text='Get Your Smart Business Card'/>

    </div>
  );
}
