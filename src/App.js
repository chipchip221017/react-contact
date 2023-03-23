import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import contacts from './mockdata.json'
import Home from "./Home";
import Contacts from "./Contacts";
import ContactDetail from "./ContactDetail";



export default function ContactList() {
    const listItems = contacts.map(contact =>
    <li
      key={contact.id}
      style={{
        color: contact.isMale ? 'darkgreen' : 'magenta'
      }}
    >
      {contact.name} - {contact.phone}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
