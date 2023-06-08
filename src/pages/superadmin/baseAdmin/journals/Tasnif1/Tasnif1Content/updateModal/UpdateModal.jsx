import React, { useRef } from "react";
import { Alert } from "../../../../../../../component/alert/Alert";
import { axiosInstanceFq } from "../../../../../../../config";

const UpdateModal = ({ updateModal, setUpdateModal, currentUser, data, setData, sortNullishValues, setAlert }) => {
  const descref = useRef();

  // update data
  const updatedData = async (obj) => {
    try {
      const res = await axiosInstanceFq.patch('ac_1/update', {
        id: obj.id,
        name: descref.current.value
      })
      let arr = data.filter((d) => {
        if (d.id === res.data.data.id) {
          d.id = res.data.data.id;
          d.name = res.data.data.name;
          d.orderNumber = res.data.data.orderNumber;
        }
        return d;
      })
      Alert(setAlert, 'success', `Ma'lumot muvaffaqiyatli o'zgartirildi`);
      sortNullishValues(arr);
      setData(arr);
      setUpdateModal({ open: false, obj: {} });
    } catch (error) {
      console.log(error.response);
      Alert(setAlert, 'warning', `${error.response.data}`);
    }
  }

  return (
    updateModal.open && (
      <div className="updateDataWindow">
        <div className="updateDataWindowWrapper">
          <form>
            <div className="updateDataWindowTop">
              <h3>O'zgartirish oynasi</h3>
              <span onClick={() => setUpdateModal({ open: false, obj: {} })}>&times;</span>
            </div>
            <div className="updateDataWindowCenter">
              <input
                type="text"
                className="form-control inputNom"
                defaultValue={updateModal.obj.name}
                ref={descref}
              />
            </div>
            <hr />
            <div className="updateDataWindowBottom">
              <button type={'button'} className="btn btn-primary" onClick={() => updatedData(updateModal.obj)}>O'zgartirish</button>
            </div>
          </form>
        </div>
      </div>
    )
  )
}

export default React.memo(UpdateModal);