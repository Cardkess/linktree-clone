
import {AiOutlineClose} from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from "../store/toggleAddLinkModelSlice";

export default function AddLinkModel() {

  const visibilty = useSelector((state) => state.addLinkModel.value);

  const dispatch = useDispatch();

  return (
    
    <div className={`model-container ${visibilty ? 'visible' : 'hidden'}`}>
        <div className="add-link-popup-model">
          <header>
            <AiOutlineClose onClick={() => dispatch(toggle())} className='popup-close-icon'/>
            <h4>Create your own Linktree</h4>
            <span>The only link in bio trusted by 35M+ people.</span>
          </header>
          <hr/>

          
        </div>
      </div>
  )
}
