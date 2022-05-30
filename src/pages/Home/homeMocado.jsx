//1 - Importações do React
import { useState, useEffect } from "react";

//2 - Importações do Componentes que criei
import { Card } from "../../components/Card/card";
/* import { data } from "../../components/Mocks/data"; */ //p mocado
import { api } from "../../services/api";
import { NewCharacterModal } from "../../components/NewCharacterModal/NewCharacterModal";

//3 - Importações do CSS
import "./home.css";

/* <<< PARTE 1 - COM DATA MOCADA - ESTÁTICA >>> */
/*  
export function Home() {
  //Toda vez que carrega a page mostre esses caracteres:
  const [characters, setCharacters] = useState([]);
  // é um array de objetos = array iterável

  //Fica verificando p DATA e renderiza a page automaticamente qdo ha alterações nos cadastros sem precisar recarregar a página.
  useEffect(() => {
    setCharacters(data);
  }, []);

  return (
    <>
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
            />
          );
        })}
      </section>
    </>
  );
}
 */

/* <<< PARTE 2 - COM API - DINÂMICA >>> */
 
export function Home() {
  const [characters, setCharacters] = useState([]);
  const [refreshCharacters, setRefreshCharacters] = useState(0);
  const [isNewCharacterModalOpen, setIsNewCharacterModalOpen] = useState(false);

  function handleOpenNewCharacterModal() { //button-create
    setIsNewCharacterModalOpen(true);
  }

  function handleCloseNewCharacterModal() {
    setIsNewCharacterModalOpen(false);
  }

  function onChangeCharacter() {
    setRefreshCharacters(refreshCharacters + 1);
  }

  useEffect(() => { // PROMISSE: PEGAR TUDO NA API P SÓ DEPOIS EXECUTAR O CODE
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

      <NewCharacterModal // CALL MODAL + PROPERTIES
        isOpen={isNewCharacterModalOpen}
        closeModal={handleCloseNewCharacterModal}
        onCreate={onChangeCharacter}
      />

    </>
  );
}
