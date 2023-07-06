import {MdAddCircle} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { toggle } from '../store/toggleAddLinkModelSlice';

export default function NavItem() {
  const dispatch = useDispatch()

  return (
    <div className="nav-item" onClick={() => dispatch(toggle())}><div className='add-item-container-div'><MdAddCircle className='add-icon'/><span>Add Link</span></div></div>
  )
}
