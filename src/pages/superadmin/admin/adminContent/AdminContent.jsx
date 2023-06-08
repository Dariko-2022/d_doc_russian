import React, { useEffect, useState } from 'react';
import AdminContentNavbar from './adminContentNavbar/AdminContentNavbar';

const AdminContent = () => {
  const [data, setData] = useState([
    {
      id: 1,
      nomlanishi: "Buxoro",
      kategoriya: "Buxoro",
      tarjimalar: "Buxoro",
      xodim: 2,
      tashkilot: "Buxoro Viloyat Hokimligi"
    }
  ]);
  const [openUpdate, setOpenUpdate] = useState({ open: false, obj: {} });
  const [openDelete, setOpenDelete] = useState({ open: false, obj: {} });

  // click checkbox
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      document.querySelector('#bulimFunc').addEventListener('click', () => {
        if (document.querySelector('#bulimFunc').checked) {
          document.querySelector('#bulim').style.display = "block";
        } else {
          document.querySelector('#bulim').style.display = "none";
        }
      })
    }

    return () => {
      document.querySelector('#bulimFunc').removeEventListener('click', () => {
        if (document.querySelector('#bulimFunc').checked) {
          document.querySelector('#bulim').style.display = "block";
        } else {
          document.querySelector('#bulim').style.display = "none";
        }
      })
      isMounted = false;
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  const Uchirish = (dat) => {
    let arr = data.filter((d) => {
      return d.id !== dat.id;
    })
    setData(arr);
  }

  const UzgartirishlarniSaqlash = (dat) => {
    let tarjima = document.querySelector('.tarjima').value;
    let arr = data.filter((d) => {
      if (d.id === dat.id) {
        d.tarjimalar = tarjima;
      }
      return d;
    });
    setData(arr);
  }

  return (
    <div className="content mb-5">
      <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Bo'lim</h3>
      <div className="card-body mt-2">
        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
          <AdminContentNavbar />
        </ul>

        <div className="tab-content">
          <div className="tab-pane fade show active" id="colored-tab1">
            <div className="card">
              <div className="card-body" style={{ padding: "30px" }}>
                <form>
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="form-group form-group-floating row">
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
                    <div className="col-lg-3">
                      <div className="form-group form-group-floating row">
                        <div className="col-lg-12">
                          <div className="position-relative">
                            <input type="text"
                              className="form-control form-control-outline"
                              placeholder="Placeholder" />
                            <label className="label-floating">Ruscha nomi</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="form-group form-group-floating row">
                        <div className="col-lg-12">
                          <div className="position-relative">
                            <input type="text"
                              className="form-control form-control-outline"
                              placeholder="Placeholder" />
                            <label className="label-floating">Tavsif</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <button type="submit" className="btn btn-primary w-100" style={{ height: "56px" }}>
                        <i className="fas fa-save" style={{ fontSize: "18px" }}></i> Saqlash
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-2 d-flex align-items-center">
                        <input type="checkbox" className='mr-1 cursor-pointer' id="bulimFunc" style={{ width: "20px", height: "20px" }} />
                        Asosiy kategoriyani tanlash
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12" id="bulim" style={{ display: "none" }}>
                      <div className="form-group mb-0">
                        <select data-placeholder="Buxoro" className="form-control select-search  form-control-outlin select" data-fouc>
                          <option></option>
                          <optgroup label="Viloyatlar">
                            <option value="AZ">Kiruvchi</option>
                            <option value="CO">Chiquvchi</option>
                            <option value="ID">Buyruqlar</option>
                            <option value="WY">Fuaqaro Murojatlari</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>

                <table className="table mt-2 table-bordered table-striped table-hover Tab">
                  <thead>
                    <tr className="bg-dark text-white NavLink text-center">
                      <th>№</th>
                      <th>Nomlanishi</th>
                      <th>Asosiy Kategoriya</th>
                      <th>Tarjimalar</th>
                      <th>Xodimlar</th>
                      <th>Tashkilot Nomi</th>
                      <th>Harakatlar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((dat, index) => (
                      <tr className="text-center">
                        <td>{dat.id}</td>
                        <td>{dat.nomlanishi}</td>
                        <td>{dat.kategoriya}</td>
                        <td>{dat.tarjimalar}</td>
                        <td>{dat.xodim}</td>
                        <td>{dat.tashkilot}</td>
                        <td className='d-flex justify-content-center'>
                          <span className="infoBtn bg-dark cursor-pointer" onClick={() => setOpenUpdate({ open: true, obj: dat })} data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="O'zgartirish"><i className="icon-pencil5" ></i> </span>
                          <span className="infoBtn bg-dark cursor-pointer" onClick={() => setOpenDelete({ open: true, obj: dat })} data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="O'chirish"><i className="icon-trash" ></i> </span>
                        </td>
                      </tr>
                    ))}
                    {openUpdate.open && (
                      <div className='adminWindow'>
                        <div className="modal-dialog modal-xl">
                          <div className="modal-content">
                            <div className="modal-header bg-primary text-white">
                              <h6 className="modal-title">Bo'lim qo'shish
                              </h6>
                              <button type="button" className="close close2" onClick={() => setOpenUpdate({ open: false, obj: {} })}>&times;</button>
                            </div>
                            <div className="modal-body">
                              <form className="ml-1" onSubmit={submitHandler}>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="form-group form-group-floating row">
                                      <div className="col-lg-12">
                                        <div className="position-relative">
                                          <input type="text"
                                            className="form-control form-control-outline"
                                            placeholder="Placeholder" />
                                          <label
                                            className="label-floating">Nomlanishi</label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div
                                      className="form-group form-group-floating row">
                                      <div className="col-lg-12">
                                        <div
                                          className="position-relative">
                                          <input type="text"
                                            className="form-control form-control-outline tarjima"
                                            placeholder="Placeholder"
                                          // defaultValue={dat.tarjimalar}
                                          />
                                          <label className="label-floating">Tarjimalar (ruscha)</label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div
                                      className="form-group form-group-floating row">
                                      <div className="col-lg-12">
                                        <div
                                          className="position-relative">
                                          <input type="text"
                                            className="form-control form-control-outline"
                                            placeholder="Placeholder" />
                                          <label
                                            className="label-floating">Tavsif</label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="form-group">
                                      <select
                                        data-placeholder="Bosh bo'lim"
                                        className="form-control select-search  form-control-outlin select">
                                        <option></option>
                                        <optgroup
                                          label="Bosh bo'lim">
                                          <option value="AZ">
                                            Buxoro</option>
                                          <option value="CO">
                                            Chiquvchi</option>
                                          <option value="ID">
                                            Buyruqlar</option>
                                          <option value="WY">
                                            Fuaqaro Murojatlari
                                          </option>
                                        </optgroup>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="form-group">
                                      <select
                                        data-placeholder="Tanlash"
                                        className="form-control select-search  form-control-outlin select">
                                        <option></option>
                                        <optgroup label="Tanlash">
                                          <option value="AZ">
                                            Buxoro</option>
                                          <option value="CO">
                                            Chiquvchi</option>
                                          <option value="ID">
                                            Buyruqlar</option>
                                          <option value="WY">
                                            Fuaqaro Murojatlari
                                          </option>
                                        </optgroup>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="form-group form-group-floating row mb-0">
                                      <div className="col-lg-12">
                                        <div className="position-relative">
                                          <button type="button" onClick={() => UzgartirishlarniSaqlash(openUpdate.obj)} className="btn btn-primary" style={{ width: "100%", height: "40px" }}>
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
                          <div className="modal-footer">
                            <button type="button" className="btn btn-link"
                              data-dismiss="modal">Yopish</button>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* delete */}
                    {openDelete.open && (
                      <div className='adminWindow'>
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header bg-primary text-white">
                              <h6 className="modal-title">O'chirish oynasi</h6>
                              <button type="button" className="close" onClick={() => setOpenDelete({ open: false, obj: {} })}>×</button>
                            </div>
                            <div className="modal-body ">
                              <h3 style={{ textTransform: "upperCase", fontWeight: "bold" }} className="text-danger">Ogoh bo'ling!</h3>
                              <h5>Ushbu ma'lumotni o'chirmoqchimisiz?</h5>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-link bekorQilish" data-dismiss="modal">Bekor qilish</button>
                              <button type="button" className="btn btn-primary" onClick={() => Uchirish(openDelete.obj)}>O'chirish</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default React.memo(AdminContent);