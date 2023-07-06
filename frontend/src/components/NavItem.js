import { GoShare } from 'react-icons/go';
import { Link } from 'react-router-dom';

export default function NavItem(props) {
    const { text , link} = props;
  return (
   <Link className='link-x' to={link} target="_blank"><div className="nav-item"><span>{text}</span><GoShare className='item-share-icon'/></div></Link> 
  )
}
