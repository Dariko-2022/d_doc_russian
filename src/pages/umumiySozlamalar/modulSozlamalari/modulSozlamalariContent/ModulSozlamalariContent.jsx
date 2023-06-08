import React from "react";

export default function ModulSozlamalariContent({ currentUser }) {

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
        <div className="content">
            <h1 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase;" }}>Modul Sozlamalari</h1>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <li className="nav-item"><a href="./deteilHokimlik.html" className="nav-link  ml-2" ><i className="icon-office"></i> Tashkilot tuzulishi</a></li>
                    <li className="nav-item"><a href="./adminstartor.html" className="nav-link"><i className="icon-user-tie"></i> Adminstartor</a></li>
                    <li className="nav-item"><a href="./modulSozlamalari.html" className="nav-link NavLinkLi"><i className="icon-stack2"></i> Modullar Sozlamasi</a></li>
                    <li className="nav-item"><span className="nav-link "><i className="icon-newspaper"></i> Kiritish Ma'lumotlari</span></li>
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px;" }}>
                                <table className="table mt-2 table-bordered table-striped table-hover Tab" >
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ width: "5%;", borderRadius: "10px 0 0 0" }}>№</th>
                                            <th style={{ width: "45%" }}>Xujjat</th>
                                            <th style={{ width: "40%" }}>Xolat</th>
                                            <th style={{ width: "5%" }}>Sozlamalar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ fontSize: "15px;" }}>
                                            <td>
                                                <input type="number" style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "60%" }} value="1" />
                                            </td>
                                            <td>Kiruvchi hujjat</td>
                                            <td id="context" className="text-center"><p>Yoqilgan</p></td>
                                            <td>
                                                <div style={{ height: "40px" }} className="custom-control d-flex align-items-center  justify-content-center custom-switch custom-control-inline">
                                                    <input type="checkbox" className="custom-control-input" onClick={myfun} id="kiruvchi" defaultChecked />
                                                    <label className="custom-control-label" for="kiruvchi"></label>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr style={{ fontSize: "15px;" }}>
                                            <td>
                                                <input type="number" style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "60%" }} value="2" />
                                            </td>
                                            <td>Chiquvchi hujjat</td>
                                            <td id="chiquvchii" className="text-center"><p>Yoqilgan</p></td>
                                            <td>
                                                <div style={{ height: "40px" }} className="custom-control d-flex align-items-center  justify-content-center custom-switch custom-control-inline">
                                                    <input type="checkbox" className="custom-control-input" onClick={myfun2} id="chiquvchi" defaultChecked />
                                                    <label className="custom-control-label" for="chiquvchi"></label>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr style={{ fontSize: "15px;" }}>
                                            <td>
                                                <input type="number" style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "60%" }} value="3" />

                                            </td>
                                            <td>Fuqaro murojaati</td>
                                            <td id="chiquvchii" className="text-center"><p>Yoqilgan</p></td>
                                            <td>
                                                <div style={{ height: "40px" }} className="custom-control d-flex align-items-center  justify-content-center custom-switch custom-control-inline">
                                                    <input type="checkbox" className="custom-control-input" onClick={myfun2} id="chiquvchi" defaultChecked />
                                                    <label className="custom-control-label" for="chiquvchi"></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr style={{ fontSize: "15px;" }}>
                                            <td>
                                                <input type="number" style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "60%" }} value="4" />
                                            </td>
                                            <td>Qaror</td>
                                            <td id="chiquvchii" className="text-center"><p>Yoqilgan</p></td>
                                            <td>
                                                <div style={{ height: "40px" }} className="custom-control d-flex align-items-center  justify-content-center custom-switch custom-control-inline">
                                                    <input type="checkbox" className="custom-control-input" onClick={myfun2} id="chiquvchi" defaultChecked />
                                                    <label className="custom-control-label" for="chiquvchi"></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr style={{ fontSize: "15px;" }}>
                                            <td>
                                                <input type="number" style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "60%" }} value="5" />
                                            </td>
                                            <td>Farmoyish</td>
                                            <td id="chiquvchii" className="text-center"><p>Yoqilgan</p></td>
                                            <td>
                                                <div style={{ height: "40px" }} className="custom-control d-flex align-items-center  justify-content-center custom-switch custom-control-inline">
                                                    <input type="checkbox" className="custom-control-input" onClick={myfun2} id="chiquvchi" defaultChecked />
                                                    <label className="custom-control-label" for="chiquvchi"></label>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr style={{ fontSize: "15px;" }}>
                                            <td>
                                                <input type="number" style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "60%" }} value="6" />
                                            </td>
                                            <td>Buyruq</td>
                                            <td id="chiquvchii" className="text-center"><p>Yoqilgan</p></td>
                                            <td>
                                                <div style={{ height: "40px" }} className="custom-control d-flex align-items-center  justify-content-center custom-switch custom-control-inline">
                                                    <input type="checkbox" className="custom-control-input" onClick={myfun2} id="chiquvchi" defaultChecked />
                                                    <label className="custom-control-label" for="chiquvchi"></label>
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