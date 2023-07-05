import { useDispatch } from 'react-redux';
import { toggle } from './toggleButtonSlice';

export default function ToggleButton() {

  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(toggle())} className="menu-toggle">
      <p>...</p>
    </div>
  );
}
