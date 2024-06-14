import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

export default function Form(props) {
  const [imageUrl, setImageUrl] = useState("");
  const [newTitre, setTitre] = useState("");
  const [newDetails, setDetails] = useState("");
  const divRef = useRef(null);
  const navigate = useNavigate();

  function handleImageChange(e) {
    setImageUrl(e.target.value);
  }

  function handleTitreChange(e) {
    setTitre(e.target.value);
  }

  function handleDetailsChange(e) {
    setDetails(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(1, imageUrl);
    if (imageUrl === "" || newTitre === "" || newDetails === "") {
      const divEl = divRef.current;
      divEl.innerHTML = `<p style="font-size:1.4rem;color:#f00;margin-bottom:0;font-family:"Raleway",sans-serif">Carte vide non enregistrée</p>`;
      setTimeout(() => {
        divEl.innerHTML = "";
      }, 1500);
      return;
    }
    // console.log(imageUrl, newTitre, newDetails);
    props.addCard(imageUrl, newTitre, newDetails);
    setImageUrl("");
    setTitre("");
    setDetails("");
    navigate("/cards");
  }

  const cardsNav = () => {
    navigate("/cards");
  };

  return (
    <div className="formAndheader">
      <header className="header">
        <h1>Cartes</h1>
        <button className="buttonNav card" onClick={cardsNav}>
          <FontAwesomeIcon icon={faIdCard} />
        </button>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="oneInput image">
          <label htmlFor="image">Image : </label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="URL de l'image"
            value={imageUrl}
            onChange={handleImageChange}
          />{" "}
          <hr />
        </div>
        <div className="oneInput titre">
          <label htmlFor="titre">Titre : </label>
          <input
            type="text"
            name="titre"
            id="titre"
            placeholder="Titre de l'image"
            value={newTitre}
            onChange={handleTitreChange}
          />{" "}
          <hr />
        </div>
        <div className="oneInput details">
          <label htmlFor="details">Détails : </label>
          <textarea
            type="text"
            name="details"
            id="details"
            placeholder="Détails de la carte"
            value={newDetails}
            onChange={handleDetailsChange}
          />
        </div>
        <div className="oneInput button">
          <button type="submit">Créer une nouvelle carte</button>
        </div>
        <div ref={divRef}></div>
      </form>
    </div>
  );
}
