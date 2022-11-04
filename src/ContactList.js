import React, { useState, useEffect } from "react";
import ContactListDetails from "./ContactListDetails";

const ContactList = () => {
  const [contactListArr, setContactListArr] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((contact) => setContactListArr(contact))
    console.log('contact',contactListArr);
  }, []);
  return (
    <div className="container text-center">
      {console.log('render')}
      <h1 className="m-5 text-info">Contact List</h1>
      <div className="container">
        <div className="container">
          {contactListArr.map((contactList, index) => (
            <ContactListDetails contactList={contactList} index={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
