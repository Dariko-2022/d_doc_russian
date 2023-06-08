import React from "react";

export default function FoySozlamalariContent({ currentUser }) {
    return (
        <div className="content">
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <h1 style={{ color: "#fff", margin: "2px", marginLeft: "2.5%" }}>Biriktirilgan Foydalanuvchilar</h1>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px;" }}>
                                <form>
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group form-group-floating row">
                                                    <div className="col-lg-10">
                                                        <div className="position-relative">
                                                            <input type="text" className="form-control form-control-outline" style={{ height: "40px;" }} placeholder="Placeholder" />
                                                            <label className="label-floating">Foydalanuvchi Logini (,) bilan kitiring</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group form-group-floating row">
                                                    <div className="col-lg-10">
                                                        <div className="position-relative">
                                                            <button className="btn btn-primary">Saqlash</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <table className="table mt-2 table-bordered datatable-select-single table-striped table-hover Tab" >
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th style={{ width: "5%", borderRadius: "10px 0 0 0" }}>№</th>
                                            <th style={{ width: "45%" }}>Nomlanishi</th>
                                            <th style={{ width: "45%" }}>IDS</th>
                                            <th style={{ width: "5%" }}>Xarakatlar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ fontSize: "15px;" }}>
                                            <td>1</td>
                                            <td>bv-88,hj-85,jj5-8999</td>
                                            <td id="context">
                                                [786,5569,855,23333,589,666]
                                            </td>
                                            <td>
                                                <span className="btn btn-dark">
                                                    <i className="icon-trash"></i>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr style={{ fontSize: "15px;" }}>
                                            <td>1</td>
                                            <td>bv-88,hj-85,jj5-8999</td>
                                            <td id="context">
                                                [786,5569,855,23333,589,666]
                                            </td>
                                            <td>
                                                <span className="btn btn-dark">
                                                    <i className="icon-trash"></i>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* <!-- end Table Components --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}