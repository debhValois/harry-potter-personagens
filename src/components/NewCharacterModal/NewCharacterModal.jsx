import "./NewCharacterModal.css";

import Modal from "react-modal";
import { useState } from "react";
import { api } from "../../services/api";
import { BiX } from "react-icons/bi";

Modal.setAppElement("#root");

export function NewCharacterModal({ isOpen, closeModal, onCreate }) {
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleCreateNewCharacter = async (event) => {
    event.preventDefault();
    const response = await api.post("/create", values);
    onCreate(response);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="overley-react-modal"
      className="content-react-modal"
    >
      <button type="button" className="close-modal-button" onClick={closeModal}>
        <BiX />
      </button>
      <h2>Criar Personagem</h2>
      <form onSubmit={handleCreateNewCharacter}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nome do personagem"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="house"
          id="house"
          placeholder="Casa do personagem"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="actor"
          id="actor"
          placeholder="Artista do personagem"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="image"
          id="image"
          placeholder="Link da imagem do personagem"
          onChange={handleChangeValues}
        />

        <button type="submit" className="new-character">
          Cadastrar
        </button>
      </form>
    </Modal>
  );
}