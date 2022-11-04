import React from "react";

const ContactListDetails = (props) => {
  const { contactList } = props;
  return (
    <div className="conatiner">
      <ul style={{ listStyle: "none" }} className="row mt-3">
        <li className="col-6 text-center fs-4 ms-5">{contactList.name}</li>
        <button className="col-auto btn btn-secondary me-2">Edit</button>
        <button className="col-auto btn btn-danger h-75">Delete</button>
      </ul>
    </div>
  );
};

export default ContactListDetails;
