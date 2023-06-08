import React from "react";
import { Alert } from "../../../../../../component/alert/Alert";
import { axiosInstance, axiosInstanceKadr } from "../../../../../../config";

const DeleteModal = ({ data, setData, currentUser, setDeleteModal, deleteModal, setAlert }) => {
  console.log(data);
  document.querySelector('.tooltip')?.remove();

  const Uchirish = async (dat) => {
    try {
      const res = await axiosInstance.delete("user/" + dat.id + '/' + JSON.parse(localStorage.getItem('oi')))
      console.log(res.data);
      let arr = [];
      data.content?.forEach((d) => {
        if (d?.id !== dat.id) {
          arr.push(d);
        }
      })

      try {
        console.log(`disconnect/${dat.id}/${localStorage.getItem('oi')}`);
        const deleteKadr = await axiosInstanceKadr.patch(`disconnect/${dat.id}/${localStorage.getItem('oi')}`)
        console.log(deleteKadr.data);
      } catch (error) {
        console.log(error);
      }

      setData({ ...data, content: arr });
      Alert(setAlert, "success", "Ma'lumot muvaffaqiyatli o'chirildi");
    } catch (error) {
      console.log(error);
      Alert(setAlert, "warning", error.response?.data);
    }
    setDeleteModal({ open: false, obj: {} });
  }

  return (
    <div className="adminWindow">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h6 className="modal-title">O'chirish oynasi</h6>
            <button type="button" className="close"
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