import { GoShare } from 'react-icons/go';

export default function NavItem(props) {
    const { text } = props;
  return (
    <div className="nav-item"><span>{text}</span><GoShare className='item-share-icon'/></div>
  )
}
