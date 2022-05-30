import "./UpdateCharacterModal.css";

import Modal from "react-modal";
import { useState } from "react";
import { api } from "../../services/api";
import { ConfirmDeleteModal } from "../ConfirmDeleteModal/ConfirmDeleteModal";
import { BiX } from "react-icons/bi";

Modal.setAppElement("#root");

export function UpdateCharacterModal(props) {
  const [updateValues, setUpdateValues] = useState({
    id: props.id,
    name: props.name,
    house: props.house,
    image: props.image,
    actor: props.actor,
  });

  /* Pega os dados do form e coloca no state updateValues */
  const handleChangeValues = (value) => {
    setUpdateValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  /* Atualiza o Character na API e no Banco */
  const handleUpdateCharacter = async (event) => {
    event.preventDefault();
    const response = await api.put(`/${props.id}`, {
      name: updateValues.name,
      house: updateValues.house,
      image: updateValues.image,
      actor: updateValues.actor,
    });
    props.onEdit(response);
    props.closeModal();
  };

  /* Delete Character */

  const [isDeleteCharacterModalOpen, setIsDeleteCharacterModalOpen] =
    useState(false);

  function handleOpenDeleteCharacterModal(event) {
    event.preventDefault();
    props.closeModal();
    setIsDeleteCharacterModalOpen(true);
  }

  function handleCloseDeleteCharacterModal() {
    setIsDeleteCharacterModalOpen(false);
  }

  /* Return do HTML */
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        overlayClassName="overley-react-modal"
        className="content-react-modal"
      >
        <button
          type="button"
          className="close-modal-button"
          onClick={props.closeModal}
        >
          <BiX />
        </button>
        <h2>Editar Personagem</h2>
        <form>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome do personagem"
            onChange={handleChangeValues}
            defaultValue={props.name}
          />
          <input
            type="text"
            name="house"
            id="house"
            placeholder="Casa do personagem"
            onChange={handleChangeValues}
            defaultValue={props.house}
          />
          <input
            type="text"
            name="actor"
            id="actor"
            placeholder="Artista do personagem"
            onChange={handleChangeValues}
            defaultValue={props.actor}
          />
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Link da imagem do personagem"
            onChange={handleChangeValues}
            defaultValue={props.image}
          />

          <div className="btns">
            <button
              type="submit"
              className="edit-modal"
              onClick={handleUpdateCharacter}
            >
              Atualizar
            </button>

            <span className="divider">ou</span>

            <button
              type="button"
              className="edit-modal"
              onClick={handleOpenDeleteCharacterModal}
            >
              Excluir
            </button>
          </div>
        </form>
      </Modal>

      <ConfirmDeleteModal
        isOpen={isDeleteCharacterModalOpen}
        closeModal={handleCloseDeleteCharacterModal}
        onDelete={props.onEdit}
        name={props.name}
        id={props.id}
      />
    </>
  );
}