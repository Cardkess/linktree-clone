import NavItem from "../components/NavItem";
import AddNavItem from "../components/AddNavItem";
import logo from "../tappa.png";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const links = useLoaderData();

  const user = useSelector((state) => state.user.value);

  const settings = useSelector((state) => state.settings.value);

  return (
    <div>
      <div className="logo-container">
        {settings === null ? <img className="logo" src={logo} alt="logo" /> :  <img className="logo" src={logo} alt="logo" />}
        
      </div>

      <div className="title-section">
        {settings === null ? <p>Tappa SA</p> : <p>{settings.title}</p>}

        {settings === null ? <p>South Africas Leading NFC smart business card manufacturer</p> : <p>{settings.subTitle}</p>}
        
      </div>

      {(user.id || links.length === 0) && <AddNavItem />}
      {links.map((link) => (
        <NavItem link={link.url} text={link.title} key={link._id} />
      ))}
    </div>
  );
}

export const linksLoader = async ({ request }) => {
  const url = process.env.REACT_APP_BACKEND_API_URL + "/links";

  const res = await fetch(url);

  return res.json();
};
