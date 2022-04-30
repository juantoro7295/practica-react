import React from 'react';
import './TodoItem.css';
import { TiTickOutline, TiTimesOutline } from "react-icons/ti";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <TiTickOutline/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <TiTimesOutline/>
      </span>
    </li>
  );
}

export { TodoItem };
