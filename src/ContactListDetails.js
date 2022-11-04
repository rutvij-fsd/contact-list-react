import React from "react";

const ContactListDetails = ({ contactList, onEditHandler , onDeleteHandle }) => {
  
  return (
    <div className="card m-2">
      <div className="card-body">
        <h5 className="card-title">{contactList.name}</h5>
        <p className="card-text">
          <b>Email</b>
          <br />
          {contactList.email}
        </p>
        {/* <p className="card-text">
          <b>Address</b>
          <br /> Street :&nbsp;
          {contactList.address.street} , Suite :&nbsp;
          {contactList.address.suite} , City :&nbsp;
          {contactList.address.city} , ZipCode :&nbsp;
          {contactList.address.zipcode}
         
        </p> */}
        
        <button className="col-auto btn btn-secondary me-2" onClick={() => onEditHandler(contactList)}>Edit</button>
        <button className="col-auto btn btn-danger h-75" onClick={()=>onDeleteHandle(contactList.id)}>Delete</button>
      </div>
      
    </div>
    
  );
};

export default ContactListDetails;
