import React from "react";
import contacts from "../contacts.js";
import Card from "./Card";

function CreateCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      link={contact.imgURL}
      tel={contact.phone}
      mail={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      {contacts.map(CreateCard)};
      {/*  <Card
        name={contacts[0].name}
        link={contacts[0].imgURL}
        tel={contacts[0].phone}
        mail={contacts[0].email}
      />

      <Card
        name={contacts[1].name}
        link={contacts[1].imgURL}
        tel={contacts[1].phone}
        mail={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        link={contacts[2].imgURL}
        tel={contacts[2].phone}
        mail={contacts[2].email}
     />  */}
    </div>
  );
}
export default App;
