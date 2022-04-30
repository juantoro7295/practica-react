import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';
import { FcPlus, FcCancel } from "react-icons/fc";
import { ButtonCancel } from "./ButtonCancel";
import { ButtonAdd } from "./ButtonAdd";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Eje: Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <ButtonCancel />
        <ButtonAdd />

      </div>
    </form>
  );
}

export { TodoForm };
