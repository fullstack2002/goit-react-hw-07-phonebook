import { useState } from "react";
import { PhoneForm, PhoneField, PhoneTitle, PhoneInput, PhoneButton } from './ContactForm.styled';
import { addContact } from "redux/operations";
import { useSelector, useDispatch } from 'react-redux'

const ContactForm = () => {

  const [state, setState] = useState({ name: "", number: "" });

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const getInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

  if (contacts.find((item) => item.name.toLowerCase() === state.name.toLowerCase())) {
    alert(`${state.name} is already in contacts!`);
		  return;
    }
    dispatch(addContact({ name: state.name, number: state.number }));
    setState({name: "", number: ""});
  }

  return (
    <div>
      <PhoneForm onSubmit={handleOnSubmit}>
      <PhoneField>
        <PhoneTitle>Name</PhoneTitle>
          <PhoneInput
          type="text"
          name="name"
          onChange={getInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={state.name}
          required />
      </PhoneField>
      <PhoneField>
        <PhoneTitle>Number</PhoneTitle>
          <PhoneInput
          type="tel"
          name="number"
          onChange={getInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={state.number}
          required />
      </PhoneField>
      <PhoneButton type="submit">Add contact</PhoneButton>
    </PhoneForm>
    </div>
  );
};

export default ContactForm;