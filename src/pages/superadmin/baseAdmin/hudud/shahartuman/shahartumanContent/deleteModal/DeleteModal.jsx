import React from "react";
import { Alert } from "../../../../../../../component/alert/Alert";
import { axiosInstanceFq } from "../../../../../../../config";

const DeleteModal = ({ deleteModal, setDeleteModal, currentUser, tumanlar, setAlert, setTumanlar }) => {

  //viloyat uchirish
  const deleteShah = async (id) => {
    try {
      const res = await axiosInstanceFq.delete(`district/delete/` + id)
      
      let arr1 = [];
      tumanlar.forEach((d) => {
        if (d.id !== res.data.data.id) {
          arr1.push(d);
        }
      })
      Alert(setAlert, 'success', `Muvoffaqqiyatli uchirdingiz`);
      setDeleteModal({ delete: false, obj: {} });
      setTumanlar(arr1);
    } catch (error) {
      console.log(error.response)
      Alert(setAlert, 'warning', `${error.response?.data?.error?.message}`)
      setDeleteModal({ delete: false, obj: {} });
    }
  }

  return (
    deleteModal.delete && (
      <div className="adminWindow">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h6 className="modal-title">O'chirish oynasi</h6>
              <button type="button" className="close close3" onClick={() => setDeleteModal({ delete: false, obj: {} })}>×</button>
            </div>
            <div className="modal-body text-center">
              <h3 style={{ textTransform: "upperCase", fontWeight: "bold" }} className="text-danger">Ogoh bo'ling!</h3>
              <h5>Ushbu ma'lumotni o'chirmoqchimisiz?</h5>
            </div>
            <div class="modal-footer">
              <button type="button" className="btn btn-primary" onClick={() => deleteShah(deleteModal.obj.id)}>O'chirish</button>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default React.memo(DeleteModal);