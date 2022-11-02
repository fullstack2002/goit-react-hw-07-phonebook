import { selectContactsByName, selectLoadingStatus } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { ContactListButton } from './ContactList.styled';
import { deleteContact } from 'redux/operations';
import Loader from '../Loader/Loader';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsByName);
  const isLoading = useSelector(selectLoadingStatus);
    
    return (
      <div>
        <ul>
        {isLoading && <Loader />}
        {contacts.map(({ id, name, phone }) => (
            <li key={id}>
            <p>Name: {name}</p>
            <p>Number: {phone}</p>
            <ContactListButton type='button' onClick={() => {
              dispatch(deleteContact(id));
            }}>Delete contact</ContactListButton>
            </li>
        ))}
        </ul>
        </div>
    );
};

export default ContactList;