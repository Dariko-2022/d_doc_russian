import React from "react";

const DeleteModal = ({ setOpenDeleteModal, deleteDataId, openDeleteModal }) => {
  return (
    <div className="adminWindow">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h6 className="modal-title">O'chirish oynasi</h6>
            <button type="button" className="close" onClick={() => setOpenDeleteModal({ open: false, id: null })}>×</button>
          </div>
          <div className="modal-body text-center">
            <h3 style={{ textTransform: "upperCase", fontWeight: "bold" }} className="text-danger">Ogoh bo'ling!</h3>
            <h5>Ushbu ma'lumotni o'chirmoqchimisiz?</h5>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={() => deleteDataId(openDeleteModal.id)}>O'chirish</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(DeleteModal);