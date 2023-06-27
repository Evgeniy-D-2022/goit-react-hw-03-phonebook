import React, { Component } from "react";
import css from './App.module.css'
import Form from "./Form/Form";
import Contacts from "./Contacts/Contacts";
import { nanoid } from 'nanoid'
import Filter from "./Filter/Filter";
import Notiflix from "notiflix";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  creatContact = ({ name, number }) => {
    const contact = { name: name, number: number, id: nanoid() };
    const { contacts } = this.state;

    if (contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notiflix.Notify.warning(`${name} is already in contacts.`);
      return;
    }
   
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    })) 
    Notiflix.Notify.success(
      `${contact.name} contact add your phonebook`
    );
   }

  hadleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    const showContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    
    return (
      <div className={css.container}>
       <h1 className={css.title}>Phonebook</h1>
     <Form 
     contacts={contacts} 
     creatContact={this.creatContact}>
     </Form>

      <h2 className={css.contacts__title}>Contacts</h2>
      < Filter 
      onFilterChange={this.hadleFilterChange}
      filter={this.state.filter}>
      </Filter>
      
      <Contacts 
      contacts = {showContacts}
      onDeleteContact={this.deleteContact}>      
      </Contacts>
     
      </div>
    )
  }
}

export default App;