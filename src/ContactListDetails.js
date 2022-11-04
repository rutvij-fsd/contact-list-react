import React from "react";

const ContactListDetails = (props) => {
  const { contactList } = props;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{contactList.name}</h5>
        <p className="card-text">
          <b>Email</b>
          <br />
          {contactList.email}
        </p>
        <p className="card-text">
          <b>Address</b>
          <br /> Street :&nbsp;
          {contactList.address.street} , Suite :&nbsp;
          {contactList.address.suite} , City :&nbsp;
          {contactList.address.city} , ZipCode :&nbsp;
          {contactList.address.zipcode}
         
        </p>
        
        <button className="col-auto btn btn-secondary me-2">Edit</button>
        <button className="col-auto btn btn-danger h-75">Delete</button>
      </div>
      
    </div>
    // <div className="conatiner ">
    //   <ul style={{ listStyle: "none" }} className="row mt-3">
    //     <li className="col-6 text-center fs-4 ms-5">{contactList.name}</li>
    //     <button className="col-auto btn btn-secondary me-2">Edit</button>
    //     <button className="col-auto btn btn-danger h-75">Delete</button>
    //   </ul>
    // </div>
  );
};

export default ContactListDetails;
