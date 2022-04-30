import React from 'react';
import './CreateTodoButton.css';
import { BsPlusCircleFill } from "react-icons/bs";


function CreateTodoButton(props) {

  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (

    <button
      className="CreateTodoButton"
      onClick={onClickButton}

    >
      <BsPlusCircleFill />
    </button>
    
  );

}

export { CreateTodoButton };
