import React from "react";
import css from './Contacts.module.css';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, onDeleteContact }) => {

    return (
        <>
        <ul className={css.contacts__list}>
        {contacts.map(contact => 
          (<li className={css.contacts__item} key={contact.id}>
          <p className={css.contacts__text} >{contact.name}:
            </p>
            <p className={css.contacts__text} >{contact.number}
            </p>

            <button
            className={css.contacts__delBtn}
            type="button"
            onClick={() => onDeleteContact(contact.id)}>
            Delete
          </button>
            </li>
          ))}
      </ul>
        </>
    )}

    Contacts.propTypes = {
      contacts: PropTypes.array,
      onDeleteContact: PropTypes.func,
        }

export default Contacts;