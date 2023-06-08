import React from "react";
import RollarNavbar from "../../rollarNavbar/RollarNavbar";

const XodimRollariContent = ({ currentUser }) => {

  const myfun = () => {
    let chk = document.getElementById('kiruvchi')
    let txt = document.getElementById('context')
    if (chk.checked) {
      alert("Siz ushbu funksiyani yoqmoqchimisiz")
      txt.innerHTML = "<p>Yoqilgan</p>"
    } else {
      alert("Siz ushbu funksiyani o'chirmoqchimisiz")
      txt.innerHTML = "<p style='color:red'>O'chirilgan</p>"
    }
  }

  const myfun2 = () => {
    let chk = document.getElementById('chiquvchi')
    let txt = document.getElementById('chiquvchii')
    if (chk.checked) {
      alert("Siz ushbu funksiyani yoqmoqchimisiz")
      txt.innerHTML = "<p>Yoqilgan</p>"
    } else {
      alert("Siz ushbu funksiyani o'chirmoqchimisiz")
      txt.innerHTML = "<p style='color:red'>O'chirilgan</p>"
    }
  }

  return (
    <div className="content mb-5">
      <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Rollar</h3>
      <div className="card-body">
        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px" }}>
          <RollarNavbar />
        </ul>

        <div className="tab-content">
          <div className="tab-pane fade show active" id="colored-tab1">
            <div className="card">
              <div className="card-body" style={{ padding: "30px" }}>
                <table className="table mt-2 table-bordered table-striped table-hover Tab" >
                  <thead>
                    <tr className="bg-dark text-white NavLink text-center">
                      <th style={{ width: "5%", borderRadius: "10px 0 0 0" }}>№</th>
                      <th style={{ width: "45%" }}>Xujjat</th>
                      <th style={{ width: "40%" }}>Xolat</th>
                      <th style={{ width: "5%" }}>Sozlamalar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ fontSize: "15px" }}>
                      <td>
                        <input type="number" style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "60%" }} defaultValue="1" />
                      </td>
                      <td>Kiruvchi hujjat</td>
                      <td id="context" className="text-center"><p>Yoqilgan</p></td>
                      <td>
                        <div style={{ height: "40px" }} className="custom-control d-flex align-items-center justify-content-center custom-switch custom-control-inline">
                          <input type="checkbox" className="custom-control-input" onClick={myfun} id="kiruvchi" defaultChecked />
                          <label className="custom-control-label" htmlFor="kiruvchi"></label>
                        </div>
                      </td>
                    </tr>
                    <tr style={{ fontSize: "15px" }}>
                      <td>
                        <input type="number" style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "60%" }} defaultValue="2" />
                      </td>
                      <td>Chiquvchi hujjat</td>
                      <td id="chiquvchi" className="text-center"><p>Yoqilgan</p></td>
                      <td>
                        <div style={{ height: "40px" }} className="custom-control d-flex align-items-center  justify-content-center custom-switch custom-control-inline">
                          <input type="checkbox" className="custom-control-input" onClick={myfun2} id="chiquvchi" defaultChecked />
                          <label className="custom-control-label" htmlFor="chiquvchi"></label>
                        </div>
                      </td>
                    </tr>
                    <tr style={{ fontSize: "15px" }}>
                      <td>
                        <input type="number" style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "60%" }} defaultValue="3" />
                      </td>
                      <td>Fuqaro murojaati</td>
                      <td id="chiquvchi" className="text-center"><p>Yoqilgan</p></td>
                      <td>
                        <div style={{ height: "40px" }} className="custom-control d-flex align-items-center  justify-content-center custom-switch custom-control-inline">
                          <input type="checkbox" className="custom-control-input" onClick={myfun2} id="chiquvchi" defaultChecked />
                          <label className="custom-control-label" htmlFor="chiquvchi"></label>
                        </div>
                      </td>
                    </tr>
                    <tr style={{ fontSize: "15px" }}>
                      <td>
                        <input type="number" style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "60%" }} defaultValue="4" />
                      </td>
                      <td>Qaror</td>
                      <td id="chiquvchi" className="text-center"><p>Yoqilgan</p></td>
                      <td>
                        <div style={{ height: "40px" }} className="custom-control d-flex align-items-center  justify-content-center custom-switch custom-control-inline">
                          <input type="checkbox" className="custom-control-input" onClick={myfun2} id="chiquvchi" defaultChecked />
                          <label className="custom-control-label" htmlFor="chiquvchi"></label>
                        </div>
                      </td>
                    </tr>
                    <tr style={{ fontSize: "15px" }}>
                      <td>
                        <input type="number" style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "60%" }} defaultValue="5" />
                      </td>
                      <td>Farmoyish</td>
                      <td id="chiquvchi" className="text-center"><p>Yoqilgan</p></td>
                      <td>
                        <div style={{ height: "40px" }} className="custom-control d-flex align-items-center  justify-content-center custom-switch custom-control-inline">
                          <input type="checkbox" className="custom-control-input" onClick={myfun2} id="chiquvchi" defaultChecked />
                          <label className="custom-control-label" htmlFor="chiquvchi"></label>
                        </div>
                      </td>
                    </tr>
                    <tr style={{ fontSize: "15px" }}>
                      <td>
                        <input type="number" style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "60%" }} defaultValue="6" />
                      </td>
                      <td>Buyruq</td>
                      <td id="chiquvchi" className="text-center"><p>Yoqilgan</p></td>
                      <td>
                        <div style={{ height: "40px" }} className="custom-control d-flex align-items-center  justify-content-center custom-switch custom-control-inline">
                          <input type="checkbox" className="custom-control-input" onClick={myfun2} id="chiquvchi" defaultChecked />
                          <label className="custom-control-label" htmlFor="chiquvchi"></label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* <!-- end admins --> */}
                {/* <!-- <button className="btn btn-primary mt-2"><i className="icon-plus2"></i> Saqlash</button> --> */}
              </div>
            </div>
            {/* <!-- end Table Components --> */}
          </div>
        </div>

      </div>
    </div >
  )
}

export default React.memo(XodimRollariContent);