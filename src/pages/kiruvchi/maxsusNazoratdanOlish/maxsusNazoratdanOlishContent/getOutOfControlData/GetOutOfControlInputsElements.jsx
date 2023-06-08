import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { axiosInstance } from "../../../../../config";
import { extensiveSearchBackPageId } from "../../../../../redux/actions/actionExtensiveSearch";

const GetOutOfControlInputsElements = ({ setData, dateFormatSet, setSelected }) => {
  const [startDate, setStartDate] = useState();
  const korrespondentref = useRef();
  const shortDescref = useRef();
  const regNumref = useRef();

  // barchasini o'qib olish
  const All = async () => {
    try {
      const res = await axiosInstance.post(`search/inControlForDirector?isDone=${true}`, {
        correspondentName: '',
        shortDescription: '',
        out_number: '',
        out_date: '',
        page: 0,
        workPlaceId: JSON.parse(localStorage.getItem('ids'))
      })
      korrespondentref.current.value = "";
      shortDescref.current.value = "";
      regNumref.current.value = "";
      setData(res.data);
      setSelected(0);
      extensiveSearchBackPageId({ selected: 0, pageName: "bajarilganPageId" })
    } catch (error) {
      console.log(error.response);
    }
  }

  // search-------------------------------------------------------------------------------------
  const SearchData = async () => {
    let sana = document.querySelector('.qisqacha2').value;

    try {
      const res = await axiosInstance.post(`search/inControlForDirector?isDone=${true}`, {
        correspondentName: korrespondentref.current.value,
        shortDescription: shortDescref.current.value,
        out_number: regNumref.current.value,
        out_date: sana ? dateFormatSet(sana) : '',
        page: 0,
        workPlaceId: JSON.parse(localStorage.getItem('ids'))
      })
      setData(res.data);
      setSelected(0);
      extensiveSearchBackPageId({ selected: 0, pageName: "bajarilganPageId" })
    } catch (error) {
      console.log(error.response);
    }
  }

  const keyDown = (e) => {
    if (e.code === "Enter") {
      SearchData();
    }
  }

  return (
    <table className={'table-sm-full'}>
      <thead>
        <tr className={'direction-mobile'}>
          <th style={{ width: '350px' }}>
            <div className="form-group form-group-feedback form-group-feedback-left inp inp-sm-none">
              <input
                type="text"
                className="form-control form-control-lg"
                id="xujjat"
                placeholder="Korrespondent"
                ref={korrespondentref}
              />
              <div className="form-control-feedback form-control-feedback-lg">
                <i className="icon-search4"></i>
              </div>
            </div>
          </th>
          <th style={{ width: '350px' }}>
            <div className="form-group form-group-feedback form-group-feedback-left inp inp-sm-none">
              <input
                type="text"
                className="form-control form-control-lg"
                id="korrespondent2"
                placeholder="Qisqacha Ma'lumot"
                ref={shortDescref}
              />
              <div className="form-control-feedback form-control-feedback-lg">
                <i className="icon-search4"></i>
              </div>
            </div>
          </th>
          <th style={{ width: '350px' }}>
            <div className="form-group form-group-feedback form-group-feedback-left inp hmmm  inp-sm-none">
              <div className="inputBox d-flex align-items-center justify-content-end input-border" style={{ height: "44px" }}>
                <input
                  type="text"
                  className="first qisqacha1"
                  placeholder="Reg №"
                  id="qisqacha1"
                  onKeyDown={(e) => keyDown(e)}
                  ref={regNumref}
                />
                <span style={{
                  margin: '0 10px',
                  fontSize: '20px',
                  color: 'grey',
                  backgroundColor: 'white'
                }}>/</span>
                <div className={'changeBox'} style={{ width: '200px' }}>
                  <DatePicker
                    className={'qisqacha2'}
                    id={'qisqacha2'}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat={'dd.MM.yyyy'}
                    isClearable
                    showYearDropdown
                    scrollableMonthYearDropdown
                    placeholderText="Sana"
                    name="dateNazOlishKiruvchi"
                  />
                </div>
              </div>
              <div className="form-control-feedback form-control-feedback-lg">
                <i className="icon-search4"></i>
              </div>
            </div>
          </th>
          <th style={{ width: '350px' }}>
            <div className="form-group form-group-feedback form-group-feedback-left inp buttonsinput inp-sm-none">
              <button type="button" className="btn btn-primary mr-2 table-sm-full"
                onClick={SearchData}>Search
              </button>
              <button type={'button'} className="btn btn-primary mr-2 mobile-table-none"
                onClick={All}>Barchasi
              </button>
              <button className="btn btn-primary mobile-table-none"
                data-toggle="dropdown"><i className="icon-menu9"
                  style={{ fontSize: "18px" }}></i>
              </button>
              <div className="dropdown-menu mobile-table-none">
                <input type="submit"
                  className="btn btn-white dropdown-item  w-100 myBtn"
                  name="id" value="Id" />
                <input type="submit"
                  className="btn btn-white dropdown-item  w-100 myBtn"
                  name="xujjat" value="Xijjat Turi" />
                <input type="submit"
                  className="btn btn-white dropdown-item  w-100 myBtn"
                  name="korres" value="Korrespondent" />
                <input type="submit"
                  className="btn btn-white dropdown-item  w-100 myBtn"
                  name="qisqacha" value="Qisqacha Ma'lumot" />
                <input type="submit"
                  className="btn btn-white dropdown-item  w-100 myBtn"
                  name="reg" value="Chiquvchi № / Sana" />
                <input type="submit"
                  className="btn btn-white dropdown-item  w-100 myBtn"
                  name="ijrochi" value="Reg № / Sana" />
                <input type="submit"
                  className="btn btn-white dropdown-item  w-100 myBtn"
                  name="harakat" value="Harakatlar" />
              </div>
            </div>
          </th>
        </tr>
      </thead>
    </table>
  )
}

export default React.memo(GetOutOfControlInputsElements);