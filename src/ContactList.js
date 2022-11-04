import React, { useState, useEffect } from "react";
import ContactListDetails from "./ContactListDetails";
import uuid from "react-uuid";

const ContactList = () => {
  const [contactListArr, setContactListArr] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [isEditing, setIsEditing] = useState({
    edit: false,
    contactId: "",
  });
  const onContactAddHandler = () => {
    console.log("onContactAddHandler");
    if (!inputName || !inputEmail) return;
    setContactListArr([
      {
        id: uuid().split("-")[0],
        name: inputName,
        email: inputEmail,
      },
      ...contactListArr,
    ]);

    setInputName("");
    setInputEmail("");
  };

  const onEditHandler = (contactList) => {
    setIsEditing({ ...isEditing, edit: true, contactId: contactList.id });
    setInputName(contactList.name);
    setInputEmail(contactList.email);
    window.scrollTo(0, 0);
  };

  const onContactUpdateHandler = () => {
    console.log("onContactUpdateHandler");
    const contactIndex = contactListArr.findIndex(
      (elem) => elem.id === isEditing.contactId
    );
    const clonedArr = [...contactListArr];
    clonedArr[contactIndex] = {
      id: uuid().split("-")[0],
      name: inputName,
      email: inputEmail,
    };
    setContactListArr(clonedArr);
    setIsEditing({ ...isEditing, edit: false, contactId: "" });
    setInputName("");
    setInputEmail("");
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((contact) => setContactListArr(contact));
    console.log("contact", contactListArr);
  }, []);
  return (
    <div className="container text-center">
      {console.log("render")}
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
          type="email"
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
            <ContactListDetails
              contactList={contactList}
              onEditHandler={onEditHandler}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
