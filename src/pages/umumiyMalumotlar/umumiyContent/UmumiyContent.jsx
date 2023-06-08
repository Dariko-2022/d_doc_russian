import React, { useState } from "react";

const UmumiyContent = () => {
  const [data, setData] = useState([
    {
      id: 1,
      nomlanishi: "Qoraqalpog'iston Respublikasi"
    }
  ]);

  const Uchirish = (ind) => {
    let arr = data.filter((d, i) => {
      return i !== ind;
    })
    setData(arr);
    document.querySelector('.close2').click();
  }

  const Uzgartirish = (ind) => {
    let nomlanishi = document.querySelector('.nomlanishi').value;
    let arr = data.filter((d, i) => {
      if (i === ind) {
        d.nomlanishi = nomlanishi
      }
      return d;
    })
    setData(arr);
    document.querySelector('.close1').click();
  }

  return (
    <div className="content">

      <h1 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>viloyatlar</h1>
      <div className="card-body">
        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
          <li className="nav-item" style={{ marginLeft: "30px" }}>
            <a href="./viloyatlar.html" className="nav-link NavLinkLi d-flex align-items-center justify-content-center">
              <i className="icon-office mr-1"></i> Viloyatlar
            </a>
          </li>
          <li className="nav-item">
            <a href="./shahartuman.html" className="nav-link d-flex align-items-center justify-content-center">
              <i className="icon-user-tie mr-1"></i> Shahar va tumanlar
            </a>
          </li>
          <li className="nav-item">
            <a href="#1" className="nav-link d-flex align-items-center justify-content-center">
              <i className="icon-stack2 mr-1"></i> Maxallalar
            </a>
          </li>
          <li className="nav-item">
            <a href="#1" className="nav-link d-flex align-items-center justify-content-center">
              <i className="icon-newspaper mr-1"></i> OTM
            </a>
          </li>
          <li className="nav-item">
            <a href="#1" className="nav-link d-flex align-items-center">
              <i className="icon-chess-queen mr-1"></i> Bayram Kunlari
            </a>
          </li>
          <li className="nav-item">
            <a href="#1" className="nav-link d-flex align-items-center">
              <i className="icon-users4 mr-1"></i> Karindoshlar
            </a>
          </li>
          <li className="nav-item">
            <a href="#1" className="nav-link d-flex align-items-center">
              <i className="icon-stats-growth mr-1"></i> Ilmiy Daraja
            </a>
          </li>
          <li className="nav-item">
            <a href="#1" className="nav-link d-flex align-items-center">
              <i className="icon-stars mr-1"></i> Chet Tillari
            </a>
          </li>
          <li className="nav-item">
            <a href="#1" className="nav-link d-flex align-items-center">
              <i className="icon-newspaper mr-1"></i>Yo'nalishlar
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="colored-tab1">
            <div className="card">
              <div className="card-body" style={{ padding: "20px 30px" }}>
                {/* <!-- form --> */}
                <form className="">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group form-group-floating row mb-2">
                        <div className="col-lg-12">
                          <div className="position-relative">
                            <input type="text"
                              className="form-control form-control-outline"
                              placeholder="Placeholder" />
                            <label className="label-floating">Nomlanishi</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <button type="submit" style={{ width: "150px", height: "55px" }}
                        className="btn btn-primary">
                        <i className="icon-floppy-disk mr-1"></i>Saqlash
                      </button>
                    </div>
                  </div>
                </form>
                {/* <!-- end form --> */}
                <table className="table mt-2 table-bordered datatable-select-single table-striped table-hover Tab">
                  <thead>
                    <tr className="bg-dark text-white NavLink text-center">
                      <th style={{ width: "5%" }}>№</th>
                      <th style={{ width: "60%" }}>Nomlanishi</th>
                      <th style={{ width: "60%" }}>Harakatlar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((dat, index) => (
                      <>
                        <tr className="text-center">
                          <td>{dat.id}</td>
                          <td>{dat.nomlanishi}</td>
                          <td className="d-flex justify-content-center">
                            <a href="#1" className="infoBtn bg-dark" data-toggle="modal" data-popup="tooltip" data-target="#yangilash" title="O'zgartirish"><i className="icon-pencil5" ></i> </a>
                            <a href="#1" className="infoBtn bg-dark" data-toggle="modal" data-popup="tooltip" data-target="#modal_theme_primary" title="O'chirish"><i className="icon-trash" ></i> </a>
                          </td>
                        </tr>
                        {/* delete */}
                        <div id="modal_theme_primary" className="modal fade show" tabIndex="-1" style={{ display: "none" }} aria-modal="true" role="dialog">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header bg-primary text-white">
                                <h6 className="modal-title">O'chirish oynasi</h6>
                                <button type="button" className="close close2" data-dismiss="modal">×</button>
                              </div>
                              <div className="modal-body text-center">
                                <h3 style={{ textTransform: "upperCase", fontWeight: "bold" }} className="text-danger">Ogoh bo'ling!</h3>
                                <h5>Ushbu ma'lumotni o'chirmoqchimisiz?</h5>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-link" data-dismiss="modal">Bekor qilish</button>
                                <button type="button" className="btn btn-primary" onClick={() => Uchirish(index)}>O'chirish</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* update */}
                        <div id="yangilash" className="modal fade" tabIndex="-1">
                          <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                              <div className="modal-header bg-primary text-white">
                                <h6 className="modal-title">O'zgartirish</h6>
                                <button type="button" className="close close1" data-dismiss="modal">&times;</button>
                              </div>

                              <div className="modal-body">
                                <form >
                                  <div className="col-lg-12">
                                    <div className="row m-0">
                                      <div className="col-lg-12">
                                        <div className="form-group form-group-floating row">
                                          <div className="col-lg-12 px-0">
                                            <div className="position-relative">
                                              <input
                                                type="text"
                                                className="form-control form-control-outline nomlanishi w-100"
                                                placeholder="Placeholder"
                                                defaultValue={dat.nomlanishi}
                                              />
                                              <label className="label-floating">Nomlanishi</label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <hr style={{ margin: "0" }} />
                                  <div className="col-lg-12 mt-3">
                                    <div className="form-group form-group-floating row mb-0">
                                      <div className="col-lg-12">
                                        <div className="position-relative">
                                          <button type="button" onClick={() => Uzgartirish(index)} className="btn btn-primary form-control form-control-outline">
                                            <i className="fas fa-save mr-1"></i>Saqlash
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(UmumiyContent);