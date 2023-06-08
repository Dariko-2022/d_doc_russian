import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import AdminElektronKitobNavbar from "../../adminChiquvchiElektronKitobNavbar/AdminChiquvchiElektronKitobNavbar";
import { axiosInstanceOut } from "../../../../../config";
import AlertContent, { Alert } from "../../../../../component/alert/Alert";

const ChiquvchiBarchasiDetailContent = ({ currentUser }) => {
  const [data, setData] = useState({});
  const [currentItems] = useState(null);
  const history = useHistory();
  const params = useParams();
  const [alert, setAlert] = useState({ open: false, text: "", color: "" });

  // id orqali jurnalni o'qib olish
  useEffect(() => {
    let isMounted = true;
    // tooltipni o'chirish
    document.querySelector('.tooltip')?.remove();

    const getData = async () => {
      try {
        const res = await axiosInstanceOut.get("journal/" + params.id)
        console.log(res?.data)
        if (isMounted) {
          document.querySelector('.uzbekchaNomi').textContent = res.data?.uzName;
          document.querySelector('.ruschaNomi').textContent = res.data?.ruName;
          document.querySelector('.tasnif').textContent = res.data?.shortDescription;
          console.log(data);
          if (isMounted)
            setData(res.data);
        }
      } catch (error) {
        console.log(error?.response);
      }
    }
    getData();

    return () => {
      isMounted = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, params.id]);

  const closeJournal = async () => {
    try {
      const res = await axiosInstanceOut.patch("journal/close/" + params.id, {})
      Alert(setAlert, "success", "Jurnal yopildi");
      setData(res.data);
    } catch (error) {
      console.log(error.response);
      Alert(setAlert, "warning", "Jurnal yopib bo'lingan");
    }
  }

  const sendArchive = async () => {
    try {
      await axiosInstanceOut.patch("journal/archive/" + params.id, {})
      Alert(setAlert, "success", "Jurnal arxivga yuborildi");
      history.push("/chiquvchi/elektron-kitob-faollar");
    } catch (error) {
      console.log(error.response);
      Alert(setAlert, "warning", error?.response?.data);
    }
  }

  const openJournal = async () => {
    try {
      const res = await axiosInstanceOut.patch("journal/open/" + params.id, {})
      Alert(setAlert, "success", "Jurnal ochildi");
      setData(res.data);
    } catch (error) {
      console.log(error.response);
      Alert(setAlert, "warning", "Jurnal ochilgan");
    }
  }

  return (
    <div className="content mb-5">
      <h3 style={{ margin: "10px 0 0 0", fontWeight: "bold", textTransform: "upperCase" }}>Ko'rish</h3>
      <div className="">
        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
          <AdminElektronKitobNavbar />
          <li className="nav-item">
            <NavLink exact to={`/chiquvchi/elektron-kitob-ko'rish/${params.id}`}
              className="nav-link align-items-center" activeClassName="NavLinkLi">
              <i className="icon-eye2 mr-1"></i> Ko'rish
            </NavLink>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="colored-tab1">
            <div className="card">
              <div className="card-body">
                <div className="col-lg-12 px-0">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="card">
                        <div className="card-title bg-dark text-light text-center">
                          <h1>Ma'lumotlar</h1>
                        </div>
                        <div className="card-body pt-0">
                          <table className="table mt-2 table-bordered table-striped table-hover Tab">
                            <tbody>
                              <tr style={{ height: "66px" }}>
                                <td style={{ width: "50%" }}>O'zbekcha nomi:</td>
                                <td className="uzbekchaNomi"></td>
                              </tr>
                              <tr style={{ height: "66px" }}>
                                <td style={{ width: "50%" }}>Ruscha nomi:</td>
                                <td className="ruschaNomi"></td>
                              </tr>
                              <tr style={{ height: "66px" }}>
                                <td style={{ width: "50%" }}>Qisqacha tasnifi:</td>
                                <td className="tasnif"></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card">
                        <div className="card-title bg-dark text-light text-center">
                          <h1>Jurnalni Boshqarish</h1>
                        </div>
                        <div className="card-body pt-0">
                          <table
                            className="table mt-2 table-bordered table-striped table-hover Tab">
                            <tbody>
                              <tr className="text-center">
                                <td>
                                  {data?.closed ? (
                                    <button className="btn btn-success"
                                      onClick={openJournal}>Jurnalni
                                      ochish</button>
                                  ) : (
                                    <button className="btn btn-danger"
                                      onClick={closeJournal}>Jurnalni yopib
                                      qo'yish</button>
                                  )}
                                </td>
                              </tr>
                              <tr className="text-center">
                                <td>
                                  <button className="btn btn-success"
                                    onClick={sendArchive}>Arxivga jo'natish
                                  </button>
                                </td>
                              </tr>
                              <tr className="text-center">
                                <td>
                                  <div className="btn-group">
                                    <button type="button"
                                      className="btn btn-primary dropdown-toggle"
                                      data-toggle="dropdown">Export
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <span className="dropdown-item"><i
                                        className="icon-menu7"></i> EXCEL</span>
                                      <span className="dropdown-item"><i
                                        className="icon-screen-full"></i> PDF</span>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <table className="table table-bordered table-striped table-hover Tab" data-paging="true" id="myTable">
                  <thead>
                    <tr className="bg-dark text-white NavLink text-center">
                      <th style={{ width: "5%" }}>№</th>
                      <th style={{ width: "10%" }}>Fayl</th>
                      <th style={{ width: "20%" }}>Korrespondent</th>
                      <th style={{ width: "25%" }}>Qisqacha Ma'lumot</th>
                      <th style={{ width: "15%" }}>Reg № / Muddati</th>
                      <th style={{ width: "20%" }}>Ijrochi</th>
                      <th style={{ width: "5%" }} className="text-center">Harakatlar</th>
                    </tr>
                  </thead>
                  <tbody id="data">
                    <>
                      {currentItems?.map((dat, index) => (
                        <tr key={index}>
                          <td className="text-center id">{dat.id}</td>
                          <td className="text-color Fayl">{dat.hujjatTuri}</td>
                          <td className="korres">O'zbekiston Respublikasi Prezidenti</td>
                          {/* <!-- so'zlar 200ta chiqadi --> */}
                          <td style={{ textAlign: "justify" }} className="qisqacha">
                            {dat.malumot}
                          </td>
                          <td className="text-center chiquvchi reg">
                            <div className="badge badge-primary">№ 25</div>
                            <hr />
                            {dat.date}
                          </td>
                          <td className="text-center ijrochi">
                            <p style={{ margin: "0", borderBottomStyle: "dashed", borderColor: "#ddd", paddingBottom: "20px" }}>D.Sodiqov
                              <span className="badge badge-danger ml-1">Bajarilmagan</span>
                            </p>
                            <p style={{ margin: "0", paddingTop: "20px" }}>D.Sodiqov
                              <span className="badge badge-primary ml-1">Bajarilgan</span>
                            </p>
                          </td>
                          <td className="harakat">
                            {/* <div className="icon d-flex justify-content-center align-items-center ">
                                                            <Link to="/kiruvchi_bajarish_ijro" className="infoBtn bg-dark" title="korish" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top">
                                                                <span><i className="icon-eye2"></i></span>
                                                            </Link>
                                                        </div> */}
                          </td>
                        </tr>
                      ))}
                    </>
                  </tbody>
                </table>
              </div>
            </div>

            {/* alert content */}
            <AlertContent alert={alert} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(ChiquvchiBarchasiDetailContent)