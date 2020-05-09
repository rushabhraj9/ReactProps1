import React from "react";
import contacts from "../contacts.js";
import Card from "./Card";
function App() {
  return (
    <div>
      <Card
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
        name={contacts[1].name}
        link={contacts[1].imgURL}
        tel={contacts[1].phone}
        mail={contacts[1].email}
      />
    </div>
  );
}
export default App;
