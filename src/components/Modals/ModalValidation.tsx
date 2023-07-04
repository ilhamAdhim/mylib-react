interface IModalValidationProps {
  onClose: () => void;
  removeList: () => void;
}

function ModalValidation({ onClose, removeList }: IModalValidationProps) {
  return (
    <div id="modal_validation" className="modal">
      <div className="modal_content">
        <div className="modal_header">
          <span>Delete All</span>
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal_body">
          <img src="./assets/delete_finished_books.svg" alt="" />
          <p>
            Are you sure want to <b> delete all </b> finished books ?{" "}
          </p>
        </div>
        <div className="modal_footer">
          <button onClick={removeList} className="yes_clear">
            <span>Yes</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalValidation;
