import React, { useRef } from "react";
import { Alert } from "../../../../../../component/alert/Alert";
import { axiosInstance } from "../../../../../../config";

const UpdateDirection = ({ setUpdateYunalish, updateYunalish, currentUser, setYunalishlar, yunalishlar, setAlert }) => {
  const directionref1 = useRef();

  const yunalishUzgartirish = async (dat) => {
    if (directionref1.current?.value) {
      try {
        const res = await axiosInstance.patch("orgType", {
          id: dat.id,
          name: directionref1.current?.value
        })
        let arr = yunalishlar.filter((d) => {
          if (d.id === res.data.id) {
            d.id = res.data.id;
            d.name = res.data.name;
            d.isActive = res.data.isActive;
          }
          return d;
        })
        Alert(setAlert, "success", "Yunalish nomi muvaffaqiyatli o'zgartirildi")
        setYunalishlar(arr);
        setUpdateYunalish({ open: false, obj: {} });
        let orgNames = document.querySelectorAll('.cardAccordion');
        orgNames.forEach((org) => {
          org.querySelector('.orgname').addEventListener('click', () => {
            if (org.querySelector('.openTash').style.display === "none") {
              org.querySelector('.' +
                '' +
                '').style.display = "block";
            } else {
              org.querySelector('.openTash').style.display = "none";
            }
          })
        })
      } catch (error) {
        console.log(error?.response);
      }
    } else {
      Alert(setAlert, "warning", "Yunalish nomi kiritilishi kerak")
    }
  }

  return (
    <div className="adminWindow">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header btn-primary p-2">
            <h5 className="modal-title">O'zgartirish oynasi</h5>
            <button type="button" className="close"
              onClick={() => setUpdateYunalish({ open: false, obj: {} })}>×
            </button>
          </div>

          <form className="modal-body form-inline justify-content-center">
            <label>Yo'nalish:</label>
            <input
              type="text"
              placeholder="Yo'nalish nomi"
              className="form-control mb-2 mr-sm-2 ml-sm-2 mb-sm-0 w-75 yunalishName"
              defaultValue={updateYunalish.obj?.name}
              ref={directionref1}
            />
            <button type="button" onClick={() => yunalishUzgartirish(updateYunalish.obj)}
              className="btn btn-primary ml-sm-2 mb-sm-0"
              style={{ textTransform: "capitalize" }}>O'zgartirish
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default React.memo(UpdateDirection);