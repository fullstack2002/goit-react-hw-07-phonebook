import React from 'react';
import { PhoneForm, PhoneField, PhoneTitle, PhoneInput, PhoneButton } from './ContactForm.styled';
import { addContact } from "redux/operations";
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

const ContactForm = () => {
  const initialValues = {
    name: '',
    phone: '',
  };

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleOnSubmit = (values, { resetForm }) => {
    contacts.find(
      contact => values.name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${values.name} is already in contacts.`)
      : dispatch(addContact(values));
    resetForm();
  };

  return (
    <div>
      <PhoneForm initialValues={initialValues} onSubmit={handleOnSubmit}>
      <PhoneField>
        <PhoneTitle>Name</PhoneTitle>
          <PhoneInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required />
      </PhoneField>
      <PhoneField>
        <PhoneTitle>Number</PhoneTitle>
          <PhoneInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required />
      </PhoneField>
      <PhoneButton type="submit">Add contact</PhoneButton>
    </PhoneForm>
    </div>
  );
};

export default ContactForm;