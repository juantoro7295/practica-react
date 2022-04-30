import React from 'react';
import { FcPlus } from "react-icons/fc";

export function ButtonAdd(){



    return (<button
        type="submit"
        className="TodoForm-button TodoForm-button--add"
      >
        <FcPlus/>
      </button>);
}