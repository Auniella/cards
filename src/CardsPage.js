import React from "react";
import Card from "./components/Card";
import Modal from "./components/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardsPage({ cards, deleteCard }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  function openModal(imageUrl) {
    setSelectedImage(imageUrl);
    setShowModal(true);
    // console.log("openModal", imageUrl);
  }
  function closeModal() {
    setSelectedImage("");
    setShowModal(false);
    // console.log("closeModal");
    //console.log("false");
  }
  const navigate = useNavigate();

  const backNav = () => {
    navigate("/cards-react");
  };

  const cardList = cards.map((card) => (
    <Card
      id={card.id}
      imageUrl={card.imageUrl}
      titre={card.titre}
      details={card.details}
      key={card.id}
      deleteCard={deleteCard}
      openModal={openModal}
    />
  ));
  return (
    <div>
      <header className="header">
        <button className="buttonNav back" onClick={backNav}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <h1>
          {cards.length}
          {""} {cards.length > 1 ? "cartes" : "carte"}
        </h1>
      </header>
      <div className="cards">{cardList}</div>
      {showModal && <Modal imageUrl={selectedImage} closeModal={closeModal} />}
    </div>
  );
}
