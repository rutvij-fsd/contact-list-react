import React, { useState, useEffect } from "react";
import ContactListDetails from "./ContactListDetails";

const ContactList = () => {
  const [contactListArr, setContactListArr] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [isEditing, setIsEditing] = useState({
    edit: false,
  });
  const onContactAddHandler = () => {
    console.log('onContactAddHandler');
  }

  const onContactUpdateHandler = () => {
    console.log('onContactUpdateHandler')
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((contact) => setContactListArr(contact))
    console.log('contact',contactListArr);
  }, []);
  return (
    <div className="container text-center">
      {console.log('render')}
      <h1 className="m-3 text-info">Contact List</h1>
      <div className="d-flex justify-content-center mb-3">
        <input
          type="text"
          className="form-control w-50 mt-4 m-1"
          placeholder="Contact Name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <input
          type="text"
          className="form-control w-50 mt-4 m-1"
          placeholder="Contact Email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        {isEditing.edit ? (
          <button
            className="btn btn-warning h-50 align-self-end ms-2 m-1"
            onClick={() => onContactUpdateHandler()}
          >
            Update
          </button>
        ) : (
          <button
            className="btn btn-primary h-50 align-self-end ms-2 m-1"
            onClick={() => onContactAddHandler()}
          >
            Add
          </button>
        )}
      </div>
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
