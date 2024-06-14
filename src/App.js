import React, { useState } from "react";
import { nanoid } from "nanoid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormPage from "./FormPage";
import CardsPage from "./CardsPage";

function App(props) {
  const [isModalOpen, setisModalOpen] = useState(false);

  function openModal() {
    setisModalOpen(true);
    console.log("true");
  }
  function closeModal() {
    setisModalOpen(false);
    console.log("false");
  }

  const [cards, setCards] = useState(props.cards);

  function addCard(imageUrl, newTitre, newDetails) {
    // console.log(imageUrl, newTitre, newDetails);
    const newCard = {
      id: `card-${nanoid()}`,
      imageUrl: imageUrl,
      titre: newTitre,
      details: newDetails,
    };
    // console.log(1, newCard);
    setCards([...cards, newCard]);
    // console.log(2, cards);
  }

  function deleteCard(id) {
    // console.log(id);
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
  }

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Routes>
            <Route
              path="/cards-react"
              element={<FormPage addCard={addCard} />}
            />
            <Route
              path="/cards-react/cards"
              element={
                <CardsPage
                  cards={cards}
                  deleteCard={deleteCard}
                  isModalOpen={isModalOpen}
                  openModal={openModal}
                  closeModal={closeModal}
                />
              }
            />
          </Routes>
        </div>
        <footer>Made with ❤️ by Auni</footer>
      </div>
    </Router>
  );
}

export default App;
