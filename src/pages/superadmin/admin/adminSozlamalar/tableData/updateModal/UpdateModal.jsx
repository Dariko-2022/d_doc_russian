import React, { useRef } from "react";
import Select from 'react-select';
import { Alert } from "../../../../../../component/alert/Alert";
import { axiosInstance } from "../../../../../../config";

const UpdateModal = ({ setUpdateModal, updateModal, allBulimSelect, setAlert, currentUser, data, setData }) => {
  const uzNameref = useRef();
  const ruNameref = useRef();
  const shortDescref = useRef();
  const departmentref = useRef();

  const UzgartirishlarniSaqlash = async (obj) => {
    if (uzNameref.current.value) {
      if (ruNameref.current.value) {
        if (shortDescref.current.value) {
          try {
            const sendData = {
              id: obj.id,
              uzName: uzNameref.current.value,
              ruName: ruNameref.current.value,
              description: shortDescref.current.value,
              upperDepartmentId: departmentref.current.props.value ? departmentref.current.props.value.value : obj.id,
            }
            console.log(sendData);
            console.log(departmentref.current.props);
            const res = await axiosInstance.patch("department", sendData)
            let arr = data.map((dat) => {
              if (dat.id === obj.id) {
                dat.id = res.data.id;
                dat.description = res.data.description;
                dat.employeeCount = res.data.employeeCount;
                dat.orderNumber = res.data.orderNumber;
                dat.ruName = res.data.ruName;
                dat.uzName = res.data.uzName;
                dat.upperDepartmentName = res.data.upperDepartmentName;
              }
              return dat;
            })
            Alert(setAlert, "success", "Ma'lumot muvaffaqitayli o'zgartirildi");
            setData(arr);
            setUpdateModal({ open: false, obj: {} });
          } catch (error) {
            console.log(error.response);
            setUpdateModal({ open: false, obj: {} });
          }
        } else {
          Alert(setAlert, "warning", "Qisqacha tasnif kiritilmagan");
          setUpdateModal({ open: false, obj: {} });
        }
      } else {
        Alert(setAlert, "warning", "Bo'limning ruscha nomi kiritilmagan");
        setUpdateModal({ open: false, obj: {} });
      }
    } else {
      Alert(setAlert, "warning", "Bo'lim nomi kiritilmagan");
      setUpdateModal({ open: false, obj: {} });
    }
  }

  return (
    <div className='adminWindow'>
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h6 className="modal-title">Bo'lim qo'shish
            </h6>
            <button type="button" className="close close2" onClick={() => setUpdateModal({ open: false, obj: {} })}>&times;</button>
          </div>
          <div className="modal-body">
            <form className="ml-1">
              <div className="row">
                <div className="col-lg-12 px-0">
                  <div className="form-group form-group-floating row">
                    <div className="col-lg-12">
                      <div className="position-relative">
                        <input type="text"
                          className="form-control form-control-outline nomlanishiUpdate"
                          placeholder="Placeholder"
                          defaultValue={updateModal.obj.uzName}
                          ref={uzNameref}
                        />
                        <label
                          className="label-floating">Nomlanishi</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div
                    className="form-group form-group-floating row">
                    <div className="col-lg-12 px-0">
                      <div className="position-relative">
                        <input type="text"
                          className="form-control form-control-outline tarjima ruschaNomiUpdate"
                          placeholder="Placeholder"
                          defaultValue={updateModal.obj.ruName}
                          ref={ruNameref}
                        />
                        <label className="label-floating">Tarjimalar
                          (ruscha)</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 px-0">
                  <div className="form-group form-group-floating row">
                    <div className="col-lg-12">
                      <div className="position-relative">
                        <input type="text"
                          className="form-control form-control-outline tavsifUpdate"
                          placeholder="Placeholder"
                          defaultValue={updateModal.obj.description}
                          ref={shortDescref}
                        />
                        <label className="label-floating">Tavsif</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <span className='text-muted' style={{ fontSize: "11px" }}>Asosiy kategoriyani tanlang:</span>
                  <div className="form-group">
                    <Select
                      defaultValue={{
                        value: updateModal.obj.id,
                        label: updateModal.obj.upperDepartmentName
                      }}
                      options={allBulimSelect.filter((d) => d.label !== updateModal.obj.uzName)}
                      placeholder="Bosh bo'lim"
                      className='boshBulimUpdate'
                      ref={departmentref}
                    />
                  </div>
                </div>
              </div>
              <div className="row px-0">
                <div className="col-lg-12 px-0">
                  <div className="form-group form-group-floating row mb-0">
                    <div className="col-lg-12">
                      <div className="position-relative">
                        <button type="button"
                          onClick={() => UzgartirishlarniSaqlash(updateModal.obj)}
                          className="btn btn-primary"
                          style={{
                            width: "100%",
                            height: "40px"
                          }}>
                          <i className="fas fa-save" style={{ fontSize: "18px" }}></i> Saqlash
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(UpdateModal);