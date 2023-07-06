import {MdAddCircle} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { toggle } from '../store/toggleAddLinkModelSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function NavItem() {
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const user = useSelector((state) => state.user.value);

  const createLinks = () => {

    if(user.id) {
      dispatch(toggle());
    } else {
      navigate('/login');
    }

  }

  return (
    <div className="nav-item" onClick={createLinks}><div className='add-item-container-div'><MdAddCircle className='add-icon'/><span>Add Link</span></div></div>
  )
}
