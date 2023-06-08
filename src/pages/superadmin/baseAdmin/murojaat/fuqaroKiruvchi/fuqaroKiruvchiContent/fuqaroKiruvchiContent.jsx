import React from 'react';
import { NavLink } from "react-router-dom";

function FuqaroKiruvchiContent() {
  return (
    <div className="content mb-5">

      <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Kiruvchi</h3>
      <div className="card-body">
        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px" }}>
          {/*<MurojaatNavbar />*/}
          <li className="nav-item">
            <NavLink to="/super_base_admin_kiruvchi" className="nav-link" activeClassName='NavLinkLi'>
              {/* <i className="icon-plus2 mr-1"></i> */}
              Kiruvchi
            </NavLink>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="colored-tab1">
            <div className="card">
              <div className="card-body" style={{ padding: "30px" }}>
                <form className="mt-3">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group form-group-floating row">
                        <div className="col-lg-12">
                          <div className="position-relative">
                            <input type="text" className="form-control form-control-outline" placeholder="Placeholder" />
                            <label className="label-floating">Nomalnishi</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <button type="submit" style={{ width: "150px", height: "55px" }} className="btn btn-primary"><i className="icon-floppy-disk"></i> Saqlash</button>
                    </div>
                  </div>
                </form>
                <table className="table mt-2 table-bordered datatable-select-single table-striped table-hover Tab" >
                  <thead>
                    <tr className="bg-dark text-white NavLink text-center">
                      <th style={{ width: "5%" }} >№</th>
                      <th style={{ width: "45%" }}>Sarlavha (O'zbek tilida)</th>
                      <td style={{ width: "45%" }}>Sarlavha (Rus Tilida)</td>
                      <th style={{ width: "5%" }}>Harakatlar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*{data.map((dat, index) => (*/}
                    {/*    <tr key={index} className="text-center">*/}
                    {/*        <td>*/}
                    {/*            <input*/}
                    {/*                type="number"*/}
                    {/*                style={{ border: "none", backgroundColor: "transparent", outline: "none", width: "60%" }}*/}
                    {/*                defaultValue={dat.id}*/}
                    {/*                onKeyDown={(e) => clickEnter(e, index)}*/}
                    {/*                className="cur"*/}

                    {/*            />*/}
                    {/*        </td>*/}
                    {/*        <td>{dat.nomlanishi}</td>*/}
                    {/*        <td>{dat.viloyat}</td>*/}
                    {/*        <td>*/}
                    {/*            <div className="icon d-flex justify-content-center align-items-center ">*/}
                    {/*                /!* <i className="icon-pen btn btn-dark mr-1 cursor-pointer" title="O'zgartirish" onClick={() => setUpdateModal({ open: true, obj: dat })} /> *!/*/}
                    {/*                /!* <i className="icon-trash btn btn-dark ml-1 cursor-pointer" title="O'chirish" onClick={() => setDeleteModal({ delete: true, obj: dat })} /> *!/*/}
                    {/*                <a href="#1" className="infoBtn bg-dark" data-popup="tooltip" title="O'zgartirish"><i className="icon-pencil5" ></i> </a>*/}
                    {/*                <a href="#1" className="infoBtn bg-dark" data-popup="tooltip" title="O'chirish" data-target="#modal_theme_primary1" data-toggle="modal"><i className="icon-trash"></i> </a>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*    </tr>*/}
                    {/*))}*/}
                  </tbody>
                </table>
                {/* query modal */}
                <div id="modal_theme_primary1" className="modal fade show" tabIndex="-1" style={{ display: "none" }} aria-modal="true" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header bg-primary text-white">
                        <h6 className="modal-title">Primary header</h6>
                        <button type="button" className="close" data-dismiss="modal">×</button>
                      </div>

                      <div className="modal-body">
                        Ma'lumotni o'chirishni xoxlaysizmi?
                      </div>

                      <div className="modal-footer">
                        <button type="button" className="btn btn-link" data-dismiss="modal">Bekor qilish</button>
                        <button type="button" className="btn btn-primary" >O'chirish</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FuqaroKiruvchiContent;