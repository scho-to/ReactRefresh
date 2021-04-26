const Modal = (props) => {
  
  function onCancel(){
    props.onCancel();
  }
  
  function onConfirm(){
    props.onConfirm();
  }
  
  return (
    <div className="absolute top-48 left-0 right-0">
      <div className="modal border mx-auto max-w-md bg-white rounded-2xl p-3 overflow-auto">
        <p className="text-xl">Are you sure?</p>
        <div className="flex justify-around mt-4">
          <button className="p-2 border" onClick={onCancel}>Cancel</button>
          <button className="p-2 border" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  )
};

export default Modal;