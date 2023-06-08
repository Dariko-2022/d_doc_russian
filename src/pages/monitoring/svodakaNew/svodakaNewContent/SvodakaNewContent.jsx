import React from "react";
import NavbarContentMonitoring from "../../navbarContentMonitoring/NavbarContentMonitoring";

const SvodakaNewContent = () => {

  const exportF = (e) => {
    console.log("salom");
  }

  return (
    <div className="content mb-5">
      <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Svodka new</h3>
      <div className="card-body">
        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
          <NavbarContentMonitoring />
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="colored-tab1">
            <div className="card">
              <div className="card-body" style={{ padding: "30px" }}>
                <div className="form-group row">
                  <div className="col-lg-6">
                    <label className="from-control">Boshlang'ich sana</label>
                    <input className="form-control" type="date" name="date" />
                  </div>
                  <div className="col-lg-6">
                    <label className="from-control">Oxirgi sana</label>
                    <input className="form-control" type="date" name="date" />
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <button type="submit" className="btn btn-primary">Yaratish</button>
                  <div className="btn-group justify-content-center mx-2">
                    <span className="btn btn-indigo dropdown-toggle" data-toggle="dropdown">Export</span>
                    <div className="dropdown-menu">
                      <span className="dropdown-item">PDF</span>
                      <span id="downloadLink" onClick={() => exportF(this)} className="dropdown-item">EXCEL</span>
                    </div>
                  </div>
                  <div className="form-group" style={{ marginLeft: "37%", width: "100%" }}>
                    <select className="form-control select-search">
                      <optgroup label="Nazorat Kartochkasi">
                        <option value="AZ">Hammasi</option>
                        <option value="AZ">1a nazorat kartochkasi </option>
                        <option value="CO">1b nazorat kartochkasi</option>
                        <option value="ID">2a nazorat kartochkasi</option>
                        <option value="WY">2b nazorat kartochkasi</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ borderCollapse: "collapse" }} className="table table-bordered table-striped table-hover Tab">
                    <tr>
                      <td width="47" rowspan="5" className="b-color" style={{ textAlign: "center" }}>№1</td>
                      <td width="480" rowspan="5" className="b-color" style={{ textAlign: "center" }}>Котибиятлар</td>
                      <td width="135" rowspan="3" className="b-color" style={{ textAlign: "center" }}>Жами келган ҳужжатлар</td>
                      <td width="1796" colspan="24" bgcolor="white" style={{ textAlign: "center", fontWeight: "700" }}>Ш У Н Д А Н</td>
                    </tr>
                    <tr>
                      <td width="159" rowspan="2" className="b-color" style={{ textAlign: "center" }}>Юқори ташкилотлардан келган хужжатлар</td>
                      <td width="159" rowspan="2" className="b-color" style={{ textAlign: "center" }}>Жамига нисбатан %    ҳисобида</td>
                      <td width="580" colspan="10" bgcolor="white" style={{ textAlign: "center", fontWeight: "700" }}>Шу жумладар</td>
                      <td width="159" rowspan="2" className="b-color" style={{ textAlign: "center" }}>Бошқа    ташкилотлардан келган хужжатлар</td>
                      <td width="159" rowspan="2" className="b-color" style={{ textAlign: "center" }}>Жамига    нисбатан % ҳисобида</td>
                      <td width="580" colspan="10" bgcolor="white" style={{ textAlign: "center", fontWeight: "700" }}>Шу жумладар</td>
                    </tr>
                    <tr>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>Ўзбекистон Республикаси Президенти томонидан    келган хужжатлар</td>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>Ўзбекистон Республикаси Вазирлар Маҳкамаси    ҳужжатлари</td>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>Ўзбекистон Республикаси Олий Мажлис Сенати    ҳужжатлари</td>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>Ўзбекистон Республикаси Олий мажлис Қонунчилик    Палатаси ҳужжатлари</td>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>Ўзбекистон Республикаси Вазирлар Маҳкамаси    ҳужжатлари</td>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>Республика ташкилотлари</td>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>Вилоят ташкилотлари</td>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>Туман (шаҳар) ҳокимликлари</td>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>Чет эллардан келадиган    хужжатлар</td>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>Бошқалар</td>
                    </tr>
                    <tr>
                      <td width="135" rowspan="2" className="b-color" style={{ textAlign: "center" }}>Сони</td>
                      <td width="159" rowspan="2" className="b-color" style={{ textAlign: "center" }}>Сони</td>
                      <td width="159" rowspan="2" className="b-color" style={{ textAlign: "center" }}>%</td>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>1</td>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>2</td>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>3</td>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>4</td>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>5</td>
                      <td width="159" rowspan="2" className="b-color" style={{ textAlign: "center" }}>Сони</td>
                      <td width="159" rowspan="2" className="b-color" style={{ textAlign: "center" }}>%</td>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>1</td>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>2</td>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>3</td>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>4</td>
                      <td width="116" colspan="2" className="b-color" style={{ textAlign: "center" }}>5</td>
                    </tr>
                    <tr>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони</td>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони</td>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони</td>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони</td>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони</td>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони</td>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони</td>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони</td>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони</td>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>Сони</td>
                      <td width="58" className="b-color" style={{ textAlign: "center" }}>%</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(SvodakaNewContent);