import NavItem from "../components/NavItem";
import AddNavItem from "../components/AddNavItem";
import logo from "../tappa.png";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";

export default function Home() {

  const links = useLoaderData();

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

      {(user.id || links.length === 0) && <AddNavItem />}
      {links.map( link => (
        <NavItem link={link.url} text={link.title} key={link._id}/>
      ))}
    </div>
  );
}

export const linksLoader = async ({ request }) => {
  const url = process.env.REACT_APP_BACKEND_API_URL + "/links";

  const res = await fetch(url);

  return res.json();
};
