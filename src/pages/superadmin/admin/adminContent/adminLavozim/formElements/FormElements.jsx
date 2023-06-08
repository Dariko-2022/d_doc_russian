import React, { useRef } from "react";
import Select from 'react-select'
import { Alert } from "../../../../../../component/alert/Alert";
import { axiosInstance } from "../../../../../../config";

const FormElements = ({ selectBulimlar, currentUser, setAlert, setData, data }) => {
  const departmentsref = useRef();
  const rankref = useRef();
  const formResetref = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (departmentsref.current.props.value) {
      if (rankref.current.value) {
        try {
          const res = await axiosInstance.post("user_position", {
            name: rankref.current.value,
            departmentId: departmentsref.current.props.value.value,
            orgId: JSON.parse(localStorage.getItem('oi'))
          })
          formResetref.current.reset();
          Alert(setAlert, "success", "Ma'lumot muvaffaqitayli qo'shildi");
          setData({ ...data, content: [...data.content, res.data] });
        } catch (error) {
          console.log(error?.response);
          Alert(setAlert, "warning", error?.response?.data);
        }
      } else {
        Alert(setAlert, "warning", "Lavozim kiritilmagan");
      }
    } else {
      Alert(setAlert, "warning", "Bo'lim nomi tanlanmagan");
    }
  }

  return (
    <form onSubmit={submitHandler} ref={formResetref}>
      <div className="row">
        <div className="col-lg-4">
          <div className="form-group">
            <Select
              options={selectBulimlar}
              placeholder="Biriktirilgan bo'lim"
              className="bulim"
              required
              ref={departmentsref}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group form-group-floating row">
            <div className="col-lg-12">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control form-control-outline lavozim"
                  placeholder="Placeholder"
                  ref={rankref}
                />
                <label className="label-floating">Lavozimi</label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group form-group-floating row">
            <div className="col-lg-12">
              <div className="position-relative">
                <button type="submit" className="btn btn-primary form-control form-control-outline">
                  <i className="fas fa-save" style={{ fontSize: "18px" }}></i> Saqlash
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default React.memo(FormElements);