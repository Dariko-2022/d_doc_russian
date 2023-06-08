import React from "react";
import { Alert } from "../../../../../../component/alert/Alert";
import { axiosInstance } from "../../../../../../config";

const DeleteModal = ({ deleteModal, setDeleteModal, currentUser, setAlert, setData, data }) => {

  // delete data
  const Uchirish = async (d) => {
    try {
      await axiosInstance.delete("department/" + d.id)
      let arr = data.filter((dat) => {
        return dat.id !== d.id
      })
      setData(arr);
    } catch (error) {
      console.log(error?.response);
      Alert(setAlert, "warning", error?.response?.data);
    }
    setDeleteModal({ open: false, obj: {} });
  }

  return (
    <div className='adminWindow'>
      <div tabIndex="-1" aria-modal="true" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h6 className="modal-title">O'chirish oynasi</h6>
              <button type="button" className="close" onClick={() => setDeleteModal({ open: false, obj: {} })}>×</button>
            </div>
            <div className="modal-body ">
              <h3 style={{ textTransform: "upperCase", fontWeight: "bold" }}
                className="text-danger">Ogoh bo'ling!</h3>
              <h5>Ushbu ma'lumotni o'chirmoqchimisiz?</h5>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-link bekorQilish"
                onClick={() => setDeleteModal({
                  open: false,
                  obj: {}
                })}>Bekor qilish
              </button>
              <button type="button" className="btn btn-primary"
                onClick={() => Uchirish(deleteModal.obj)}>O'chirish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(DeleteModal);