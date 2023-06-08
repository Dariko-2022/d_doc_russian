import React from "react";
import { Alert } from "../../../../../../component/alert/Alert";
import { axiosInstance } from "../../../../../../config";

const DeleteModal = ({ setDeleteModal, deleteModal, currentUser, setAlert, data, setData }) => {

  const Uchirish = async (obj) => {
    try {
      await axiosInstance.delete("user_position/" + obj.id)
      let arr = data.content.filter((dat) => {
        return dat.id !== obj.id
      })
      setData({ ...data, content: arr });
    } catch (error) {
      console.log(error?.response);
      Alert(setAlert, "warning", error?.response?.data);
    }
    setDeleteModal({ open: false, obj: {} });
  }

  return (
    <div className="adminWindow text-center">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h6 className="modal-title">O'chirish oynasi</h6>
            <button type="button" className="close"
              onClick={() => setDeleteModal({
                open: false,
                obj: {}
              })}>×
            </button>
          </div>
          <div className="modal-body ">
            <h3 style={{
              textTransform: "upperCase",
              fontWeight: "bold"
            }} className="text-danger">Ogoh bo'ling!</h3>
            <h5>Ushbu ma'lumotni o'chirmoqchimisiz?</h5>
          </div>
          <div className="modal-footer">
            <button type="button"
              className="btn btn-link bekorQilish"
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
  )
}

export default React.memo(DeleteModal);