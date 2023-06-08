import React, { useRef } from "react";
import { Alert } from "../../../../../../component/alert/Alert";
import { axiosInstance } from "../../../../../../config";
import is from 'is_js';

const UpdateModal = ({ updateModal, setUpdateModal, setAlert, currentUser, setData, selected }) => {
  const nameref = useRef();
  const lastnameref = useRef();
  const middlenameref = useRef();
  const phoneref = useRef();
  const emailref = useRef();
  const exatref = useRef();
  const pinflref = useRef();



  document.querySelector('.tooltip')?.remove();

  const uzgartirish = async (dat) => {
    let arr = [];
    for (let i = 0; i < phoneref.current.value?.length; i++) {
      if (parseInt(phoneref.current.value[i]) >= 0) {
        arr.push(phoneref.current.value[i]);
      }
    }

    if (nameref.current.value) {
      if (nameref.current.value?.length > 2) {
        if (lastnameref.current.value) {
          if (middlenameref.current.value) {
            if (arr?.length === 12) {
              if (is.email(emailref.current.value)) {
                try {
                  const sendingData = {
                    id: dat.id,
                    lastName: lastnameref.current.value,
                    surnameEngl: dat.surnameEngl,
                    firstName: nameref.current.value,
                    pnfl: pinflref.current.value,
                    mobileNumber: phoneref.current.value,
                    email: emailref.current.value,
                    exat: exatref.current.value,
                    middleName: middlenameref.current.value,
                    fileId: 1,
                    orgId: JSON.parse(localStorage.getItem('oi'))
                  }

                  console.log(sendingData);

                  await axiosInstance.patch("user/updateUser", sendingData)
                  try {
                    const res = await axiosInstance.post("user/searchByName", {
                      name: "",
                      page: selected,
                      orgId: JSON.parse(localStorage.getItem('oi'))
                    })
                    Alert(setAlert, "success", "Ma'lumot muvaffaqiyatli o'zgartirildi");
                    setUpdateModal({ open: false, obj: {} })
                    setData(res.data);
                  } catch (error) {
                    console.log(error.response);
                  }
                } catch (error) {
                  console.log(error.response);
                }
              } else {
                Alert(setAlert, "warning", "Email xato kiritilgan");
                setUpdateModal({ open: false, obj: {} });
              }
            } else {
              Alert(setAlert, "warning", "Telefon raqam xato kiritilgan");
              setUpdateModal({ open: false, obj: {} });
            }
          } else {
            Alert(setAlert, "warning", "Otasi ismi kiritilmagan");
            setUpdateModal({ open: false, obj: {} });
          }
        } else {
          Alert(setAlert, "warning", "Familiya kiritilmagan");
          setUpdateModal({ open: false, obj: {} });
        }
      } else {
        Alert(setAlert, "warning", "Ism kamida 3 ta harfdan iborat bo'lishi kerak");
        setUpdateModal({ open: false, obj: {} });
      }
    } else {
      Alert(setAlert, "warning", "Ism kiritilmagan");
      setUpdateModal({ open: false, obj: {} });
    }
  }

  console.log(updateModal);
  return (
    <div className="adminWindow">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h6 className="modal-title">O'zgartirish</h6>
            <button type="button" className="close" onClick={() => setUpdateModal({ open: false, obj: {} })}>&times;</button>
          </div>

          <div className="modal-body pb-0">
            <form>
              <div className="row m-0 px-0">
                <div className="col-lg-4">
                  <div className="form-group form-group-floating">
                    <div className="position-relative">
                      <input
                        type="text"
                        style={{ textTransform: "capitalize" }}
                        className="form-control form-control-outline"
                        placeholder="Placeholder"
                        defaultValue={updateModal.obj?.firstName}
                        ref={nameref}
                      />
                      <label className="label-floating">Ism</label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group form-group-floating">
                    <div className="position-relative">
                      <input
                        type="text"
                        style={{ textTransform: "capitalize" }}
                        className="form-control form-control-outline"
                        placeholder="Placeholder"
                        defaultValue={updateModal.obj?.lastName}
                        ref={lastnameref}
                      />
                      <label
                        className="label-floating">Familiya</label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group form-group-floating">
                    <div className="position-relative">
                      <input
                        type="text"
                        style={{ textTransform: "capitalize" }}
                        className="form-control form-control-outline"
                        placeholder="Placeholder"
                        defaultValue={updateModal.obj?.middleName}
                        ref={middlenameref}
                      />
                      <label className="label-floating">Otasini
                        Ismi</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row m-0 px-0">
                <div className="col-lg-4">
                  <div className="form-group form-group-floating">
                    <div className="position-relative">
                      <input
                        type="text"
                        data-mask="+998(99) 999-99-99"
                        className="form-control form-control-outline"
                        placeholder="Placeholder"
                        defaultValue={updateModal.obj?.mobileNumber}
                        ref={phoneref}
                      />
                      <label className="label-floating">Telefon
                        Raqami</label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group form-group-floating">
                    <div className="position-relative">
                      <input
                        type="email"
                        className="form-control form-control-outline"
                        placeholder="Placeholder"
                        defaultValue={updateModal.obj?.email}
                        ref={emailref}
                      />
                      <label className="label-floating">Email</label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group form-group-floating">
                    <div className="position-relative">
                      <input
                        type="email"
                        className="form-control form-control-outline"
                        placeholder="Placeholder"
                        defaultValue={updateModal.obj?.exat}
                        ref={exatref}
                      />
                      <label
                        className="label-floating">E-xat</label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group form-group-floating">
                    <div className="position-relative">
                      <input
                        type="text"
                        data-mask="9999-9999-9999-99"
                        className="form-control form-control-outline"
                        placeholder="Placeholder"
                        defaultValue={updateModal.obj?.pnfl}
                        disabled
                        ref={pinflref}
                      />
                      <label
                        className="label-floating">PinFL</label>
                    </div>
                  </div>
                </div>
              </div>
              <hr style={{ margin: "0" }} />
              <div className="form-group form-group-floating mt-3 px-2">
                <div className="position-relative">
                  <button type="button"
                    onClick={() => uzgartirish(updateModal.obj)}
                    className="btn btn-primary form-control form-control-outline">
                    <i className="fas fa-save mr-1"></i>Saqlash
                  </button>
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