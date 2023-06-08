import React from "react";
import RollarNavbar from "../rollarNavbar/RollarNavbar";

const RollarContent = ({ currentUser }) => {
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
  const myfun1 = () => {
    let chk = document.getElementById('kiruvchi1')
    let txt = document.getElementById('context1')
    if (chk.checked) {
      alert("Siz ushbu funksiyani yoqmoqchimisiz")
      txt.innerHTML = "<p>Yoqilgan</p>"
    } else {
      alert("Siz ushbu funksiyani o'chirmoqchimisiz")
      txt.innerHTML = "<p style='color:red'>O'chirilgan</p>"
    }
  }
  const myfun2 = () => {
    let chk = document.getElementById('kiruvchi2')
    let txt = document.getElementById('context2')
    if (chk.defaultChecked) {
      alert("Siz ushbu funksiyani yoqmoqchimisiz")
      txt.innerHTML = "<p>Yoqilgan</p>"
    } else {
      alert("Siz ushbu funksiyani o'chirmoqchimisiz")
      txt.innerHTML = "<p style='color:red'>O'chirilgan</p>"
    }
  }
  const myfun3 = () => {
    let chk = document.getElementById('kiruvchi3')
    let txt = document.getElementById('context3')
    if (chk.checked) {
      alert("Siz ushbu funksiyani yoqmoqchimisiz")
      txt.innerHTML = "<p>Yoqilgan</p>"
    } else {
      alert("Siz ushbu funksiyani o'chirmoqchimisiz")
      txt.innerHTML = "<p style='color:red'>O'chirilgan</p>"
    }
  }
  const myfun4 = () => {
    let chk = document.getElementById('kiruvchi4')
    let txt = document.getElementById('context4')
    if (chk.checked) {
      alert("Siz ushbu funksiyani yoqmoqchimisiz")
      txt.innerHTML = "<p>Yoqilgan</p>"
    } else {
      alert("Siz ushbu funksiyani o'chirmoqchimisiz")
      txt.innerHTML = "<p style='color:red'>O'chirilgan</p>"
    }
  }
  const myfun5 = () => {
    console.log("salom");
    let chk = document.getElementById('kiruvchi5')
    let txt = document.getElementById('context5')
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
                      <td className="d-flex align-items-center justify-content-center">
                        <input type="checkbox" defaultChecked onClick={myfun} id="kiruvchi" style={{ width: "26px", height: "26px" }} />
                        {/* <div style={{ height: "40px" }} className="custom-control d-flex align-items-center justify-content-center custom-switch custom-control-inline">
                                                    <input type="checkbox" className="custom-control-input" onClick={myfun} id="kiruvchi" defaultChecked />
                                                    <label className="custom-control-label" htmlFor="kiruvchi"></label>
                                                </div> */}
                      </td>
                    </tr>
                    <tr style={{ fontSize: "15px" }}>
                      <td>
                        <input type="number" style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "60%" }} defaultValue="2" />
                      </td>
                      <td>Chiquvchi hujjat</td>
                      <td id="context1" className="text-center"><p>Yoqilgan</p></td>
                      <td className="d-flex align-items-center justify-content-center">
                        <input type="checkbox" defaultChecked onClick={myfun1} id="kiruvchi1" style={{ width: "26px", height: "26px" }} />
                        {/* <div style={{ height: "40px" }} className="custom-control d-flex align-items-center  justify-content-center custom-switch custom-control-inline">
                                                    <input type="checkbox" className="custom-control-input" onClick={myfun1} id="kiruvchi1" defaultChecked />
                                                    <label className="custom-control-label" htmlFor="chiquvchi"></label>
                                                </div> */}
                      </td>
                    </tr>
                    <tr style={{ fontSize: "15px" }}>
                      <td>
                        <input type="number" style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "60%" }} defaultValue="3" />
                      </td>
                      <td>Fuqaro murojaati</td>
                      <td id="context2" className="text-center"><p>Yoqilgan</p></td>
                      <td className="d-flex align-items-center justify-content-center">
                        <input type="checkbox" defaultChecked onClick={myfun2} id="kiruvchi2" style={{ width: "26px", height: "26px" }} />
                        {/* <div style={{ height: "40px" }} className="custom-control d-flex align-items-center  justify-content-center custom-switch custom-control-inline">
                                                    <input type="checkbox" className="custom-control-input" onClick={myfun2} id="kiruvchi2" defaultChecked />
                                                    <label className="custom-control-label" htmlFor="chiquvchi"></label>
                                                </div> */}
                      </td>
                    </tr>
                    <tr style={{ fontSize: "15px" }}>
                      <td>
                        <input type="number" style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "60%" }} defaultValue="4" />
                      </td>
                      <td>Qaror</td>
                      <td id="context3" className="text-center"><p>Yoqilgan</p></td>
                      <td className="d-flex align-items-center justify-content-center">
                        <input type="checkbox" defaultChecked onClick={myfun3} id="kiruvchi3" style={{ width: "26px", height: "26px" }} />
                        {/* <div style={{ height: "40px" }} className="custom-control d-flex align-items-center  justify-content-center custom-switch custom-control-inline">
                                                    <input type="checkbox" className="custom-control-input" onClick={myfun3} id="kiruvchi3" defaultChecked />
                                                    <label className="custom-control-label" htmlFor="chiquvchi"></label>
                                                </div> */}
                      </td>
                    </tr>
                    <tr style={{ fontSize: "15px" }}>
                      <td>
                        <input type="number" style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "60%" }} defaultValue="5" />
                      </td>
                      <td>Farmoyish</td>
                      <td id="context4" className="text-center"><p>Yoqilgan</p></td>
                      <td className="d-flex align-items-center justify-content-center">
                        <input type="checkbox" defaultChecked onClick={myfun4} id="kiruvchi4" style={{ width: "26px", height: "26px" }} />
                        {/* <div style={{ height: "40px" }} className="custom-control d-flex align-items-center  justify-content-center custom-switch custom-control-inline">
                                                    <input type="checkbox" className="custom-control-input" onClick={myfun4} id="kiruvchi4" defaultChecked />
                                                    <label className="custom-control-label" htmlFor="chiquvchi"></label>
                                                </div> */}
                      </td>
                    </tr>
                    <tr style={{ fontSize: "15px" }}>
                      <td>
                        <input type="number" style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "60%" }} defaultValue="6" />
                      </td>
                      <td>Buyruq</td>
                      <td id="context5" className="text-center"><p>Yoqilgan</p></td>
                      <td className="d-flex align-items-center justify-content-center">
                        <input type="checkbox" defaultChecked onClick={myfun5} id="kiruvchi5" style={{ width: "26px", height: "26px" }} />
                        {/* <div style={{ height: "40px" }} className="custom-control d-flex align-items-center  justify-content-center custom-switch custom-control-inline">
                                                    <input type="checkbox" className="custom-control-input" onClick={myfun5} id="kiruvchi5" defaultChecked />
                                                    <label className="custom-control-label" htmlFor="chiquvchi"></label>
                                                </div> */}
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

export default React.memo(RollarContent);