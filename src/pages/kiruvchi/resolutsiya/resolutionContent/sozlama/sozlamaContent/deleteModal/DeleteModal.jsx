import React from "react";
import { Alert } from "../../../../../../../component/alert/Alert";
import { axiosInstance } from "../../../../../../../config";

const DeleteModal = ({ deleteModal, setDeleteModal, params, currentUser, data, setAlert, setData }) => {

  // faylni o'chirish
  const Uchirish = async (dat) => {
    try {
      const res = await axiosInstance.delete(`document/deleteFile/${dat.id}/${params.id}`)
      let arr = data?.files?.filter((d) => {
        return d.id !== res.data;
      })
      Alert(setAlert, "success", "Muvaffaqiyatli o'chirildi");
      setDeleteModal({ open: false, obj: {} });
      setData({ data, files: arr });
    } catch (error) {
      console.log(error.response);
      setDeleteModal({ open: false, obj: {} });
      Alert(setAlert, "warning", "Fayl topilmadi");
    }
  }

  return (
    <div className="adminWindow">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h6 className="modal-title">O'chirish oynasi</h6>
            <button type="button" className="close close1"
              onClick={() => setDeleteModal({ open: false, obj: {} })}>×
            </button>
          </div>
          <div className="modal-body text-center">
            <h3 style={{ textTransform: "upperCase", fontWeight: "bold" }}
              className="text-danger">Ogoh bo'ling!</h3>
            <h5>Ushbu ma'lumotni o'chirmoqchimisiz?</h5>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-link bekorQilish"
              onClick={() => setDeleteModal({ open: false, obj: {} })}>Bekor
              qilish
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