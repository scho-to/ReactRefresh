import React, {useState} from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const clickHandler = () => {
    setModalIsOpen(true);
  }
  
  function cancelHandler() {
    setModalIsOpen(false);
  }
  
  function confirmHandler(){
    props.removeHandler(props.id);
    cancelHandler();
  }
  
  return (
    <div className="card mx-auto max-w-md my-2 border-2 rounded-xl shadow-md p-1 bg-gray-100 overflow-auto">
      <h2 className="text-2xl">{props.text}</h2>
      <div className="actions float-right m-2">
        <button className="border rounded p-1 bg-gray-400 text-white shadow-inner bg-gradient-to-r from-red-500" onClick={clickHandler}>Delete</button>
      </div>
      {modalIsOpen && <Backdrop onCancel={cancelHandler} />}
      {modalIsOpen && <Modal onCancel={cancelHandler} onConfirm={confirmHandler} />}
    </div>
  );
};

export default Todo;