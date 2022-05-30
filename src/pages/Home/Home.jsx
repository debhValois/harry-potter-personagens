import { useState, useEffect } from "react";

import { Card } from "../../components/Card/Card";
import { api } from "../../services/api";
import { NewCharacterModal } from "../../components/NewCharacterModal/NewCharacterModal";

import "./Home.css";

export function Home() {
  const [characters, setCharacters] = useState([]);
  const [refreshCharacters, setRefreshCharacters] = useState(0);
  const [isNewCharacterModalOpen, setIsNewCharacterModalOpen] = useState(false);

  function handleOpenNewCharacterModal() {
    setIsNewCharacterModalOpen(true);
  }

  function handleCloseNewCharacterModal() {
    setIsNewCharacterModalOpen(false);
  }

  function onChangeCharacter() {
    setRefreshCharacters(refreshCharacters + 1);
  }

  useEffect(() => {
    api.get("/all").then((response) => setCharacters(response.data));
  }, [refreshCharacters]);

  return (
    <>
      <section className="button-create">
        <button type="button" onClick={handleOpenNewCharacterModal}>
          Criar Personagem
        </button>
      </section>

      <section className="cards-home">
        {characters.map((char) => {
          return (
            <Card
              key={`char_${char._id}`}
              id={char._id}
              name={char.name}
              house={char.house}
              image={char.image}
              actor={char.actor}
              onEdit={onChangeCharacter}
            />
          );
        })}
      </section>

      <NewCharacterModal
        isOpen={isNewCharacterModalOpen}
        closeModal={handleCloseNewCharacterModal}
        onCreate={onChangeCharacter}
      />
    </>
  );
}