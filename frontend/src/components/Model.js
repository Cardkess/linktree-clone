import { NavLink } from "react-router-dom";
import {AiOutlineClose} from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from "../store/toggleButtonSlice";
import { setUser } from "../store/userSlice";

export default function Model() {

  const visibilty = useSelector((state) => state.toggleButton.value);

  const user = useSelector((state) => state.user.value);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setUser({}));
    dispatch(toggle());
  }

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
            {!user.id && <NavLink onClick={() => dispatch(toggle())} to='login' className='popup-nav-link btn-login'>Login</NavLink>}
            
            {!user.id && <NavLink onClick={() => dispatch(toggle())} to='signup' className='popup-nav-link btn-signup'>Sign up</NavLink>}

            {user.id && <NavLink onClick={() => dispatch(toggle())} to='settings' className='popup-nav-link btn-login'>Settings</NavLink>}

            {user.id && <NavLink onClick={logout} className='popup-nav-link btn-logout'>Log out</NavLink>}

          </div>
          
        </div>
      </div>
  )
}
