import React from 'react';
import {  FcCancel } from "react-icons/fc";
import { TodoContext } from '../TodoContext';

export function ButtonCancel(){
    const onCancel = () => {
        setOpenModal(false);

      };
      const {
        setOpenModal,
      } = React.useContext(TodoContext);
      return(<button
        type="button"
        className="TodoForm-button TodoForm-button--cancel"
        onClick={onCancel}
        >
        <FcCancel/>
      </button>);
    
};