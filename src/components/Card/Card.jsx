import "./Card.css";

import { useState } from "react";
import { UpdateCharacterModal } from "../UpdateCharacterModal/UpdateCharacterModal";

export function Card(props) {
  const [isUpdateCharacterModalOpen, setIsUpdateCharacterModalOpen] =
    useState(false);

  function handleOpenUpdateCharacterModal() {
    setIsUpdateCharacterModalOpen(true);
  }

  function handleCloseUpdateCharacterModal() {
    setIsUpdateCharacterModalOpen(false);
  }
  return (
    <>
      <section className="card" onClick={handleOpenUpdateCharacterModal} data-tooltip="Clique no card para editar ou excluir">
        <img src={props.image} alt="" />
        <div className="card-text">
          <h3 className="card-title">{props.name}</h3>
          <span className="card-house">{props.house}</span>
          <p className="card-actor">Artista: {props.actor}</p>
        </div>
      </section>

      <UpdateCharacterModal
        isOpen={isUpdateCharacterModalOpen}
        closeModal={handleCloseUpdateCharacterModal}
        onEdit={props.onEdit}
        name={props.name}
        image={props.image}
        house={props.house}
        actor={props.actor}
        id={props.id}
      />
    </>
  );
}