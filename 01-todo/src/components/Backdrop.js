const Backdrop = (props) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-40" onClick={props.onCancel} />
  )
};

export default Backdrop;