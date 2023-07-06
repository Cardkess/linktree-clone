import { NavLink } from "react-router-dom";
import {AiOutlineClose} from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from "../store/toggleButtonSlice";

export default function Model() {

  const visibilty = useSelector((state) => state.toggleButton.value);
  const dispatch = useDispatch();

  return (
    
    <div className={`model-container ${visibilty ? 'visible' : 'hidden'}`}>
        <div className="popup-model">
          <header>
            <AiOutlineClose onClick={() => dispatch(toggle())} className='popup-close-icon'/>
            <h4>Create your own Linktree</h4>
            <span>The only link in bio trusted by 35M+ people.</span>
          </header>
          <hr/>

          <div className="popup-model-links">
            <NavLink onClick={() => dispatch(toggle())} to='login' className='popup-nav-link btn-login'>Login</NavLink>
            <NavLink onClick={() => dispatch(toggle())} to='signup' className='popup-nav-link btn-signup'>Sign up</NavLink>
          </div>
          
        </div>
      </div>
  )
}
