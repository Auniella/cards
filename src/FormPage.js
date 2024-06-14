import React from "react";
import Form from "./components/Form";

export default function FormPage({ addCard }) {
  return (
    <div className="newFormDiv">
      <div className="formDiv">
        <Form addCard={addCard} />
      </div>
    </div>
  );
}
