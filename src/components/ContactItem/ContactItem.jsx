import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/reducers';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {name}: {number}
      <button onClick={() => dispatch(removeContact(id))} type="butoon">
        Delete
      </button>
    </li>
  );
};
