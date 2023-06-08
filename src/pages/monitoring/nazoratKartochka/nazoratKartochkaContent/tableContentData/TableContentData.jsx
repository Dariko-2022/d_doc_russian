import React, { useCallback, useState } from "react";
import ReactPaginate from "react-paginate";
import AlertContent, { Alert } from "../../../../../component/alert/Alert";
import { axiosInstance } from "../../../../../config";

const TableContentData = ({ allCard, data, setSelected, setData, selected, startDate, endDate, Direct, DocumentType, Correspondent }) => {
  const [alert, setAlert] = useState({ open: false, color: "", text: "" });

  // kartochkani tanlaganda keladigan barcha ma'lumotlari
  const getInlineCardTypeData = async (id) => {
    setData({});
    try {
      const res = await axiosInstance.post("monitoring/control-card", {
        cardTypeID: id,
        cardTypes: Direct.current.value,
        cards: DocumentType.current.value ? DocumentType.current.value : [],
        correspondents: Correspondent.current.value ? Correspondent.current.value : [],
        endDate: endDate ? new Date(endDate).toLocaleDateString() : null,
        startDate: startDate ? new Date(startDate).toLocaleDateString() : null,
        page: 0,
        orgId: JSON.parse(localStorage.getItem('oi')),
        workPlaceId: localStorage.getItem('ids')
      });

      if (res.data?.totalElements > 0) {
        setTimeout(() => {
          setData(res.data);
        }, 100);
      } else {
        Alert(setAlert, "warning", "Hech qanday ma'lumot mavjud emas");
      }
      setSelected(0);
    } catch (error) {
      console.log(error);
      Alert(setAlert, "warning", error.response?.data?.message);
    }
  }

  const handlePageClick = useCallback(async (e, cardTypeId) => {
    try {
      const res = await axiosInstance.post(`monitoring/control-card`, {
        cardTypeID: cardTypeId,
        cardTypes: Direct.current.value,
        cards: DocumentType.current.value ? DocumentType.current.value : [],
        correspondents: Correspondent.current.value ? Correspondent.current.value : [],
        endDate: endDate ? new Date(endDate).toLocaleDateString() : null,
        startDate: startDate ? new Date(startDate).toLocaleDateString() : null,
        page: e.selected,
        orgId: JSON.parse(localStorage.getItem('oi')),
        workPlaceId: localStorage.getItem('ids')
      })

      setData(res.data);
    } catch (error) {
      console.log(error.response);
    }
    setSelected(e.selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setData, setSelected]);

  return (
    <>
      <table id="myTable" className="table-bordered table-striped table-hover Tab" >
        <thead className="theadSticky">
          <tr className="bg-dark text-white text-center tableHeader w-100">
            <th style={{ width: "5%" }}>№</th>
            <th style={{ width: "15%" }}>
              Ўзбекистон Республикаси Қонунлари, Президент фармонлари, қарорлари, фармойишлари ва Ҳукумат қарорларининг номи
            </th>
            <th style={{ width: "5%" }}>
              Ҳужжат тартиб рақами ва қабул қилинган санаси
            </th>
            <th style={{ width: "5%" }}>
              Ҳужжатнинг ҳокимлик девонхонасига кириш санаси, қайд этиш рақами
            </th>
            <th style={{ width: "5%" }}>
              Ҳоким резолюция қўйган сана
            </th>
            <th style={{ width: "20%" }}>Резолюция мазмуни</th>
            <th style={{ width: "5%" }}>Қабул қилинган қарор (буйруқ, фармойиш), тадбирлар №, санаси</th>
            <th style={{ width: "5%" }}>
              Қабул қилинган қарор (буйруқ, фармойиш) назорат режаси (график, ҳаракат дастури ва б), тасдиқланган санаси
            </th>
            <th style={{ width: "5%" }}>
              Ўз қарорлари кимларга етказилган (тарқатма реестри бўйича рўйхат), реестр№, санаси
            </th>
            <th style={{ width: "20%" }}>
              Ижро ҳолати, топшириқларнинг ижроси қандай амалга оширилган, мақсадли кўрсаткичларнинг бажарилиши
            </th>
            <th style={{ width: "10%" }}>
              Ижро ҳолати қачон, қаерда муҳокама этилди, кимга нисбатан қандай чоралар кўрилган.
            </th>
          </tr>
        </thead>

        <tbody>
          <tr style={{ textAlign: "center" }}>
            <td style={{ width: "5%" }}>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
          </tr>
        </tbody>

        {allCard?.length > 0 && allCard.map((name, index) => (
          <>
            <tbody key={index} className="js-table-sections-header" >
              <tr style={{ textAlign: "center", cursor: "pointer", fontSize: "13px" }} data-toggle="collapse" href={`#route1${index}`} onClick={() => getInlineCardTypeData(name.value)}>
                <td colSpan="11" className="text-color p-2">{name.label}</td>
              </tr>
            </tbody>

            {/* ichki ma'lumotlar */}
            <tbody key={allCard?.length + index} id={`route1${index}`} className="collapse" data-parent={`#myTable`}>
              {data.content?.length > 0 && data.content.map((dat, i) => (
                <tr key={Math.random() * 1000 + allCard?.length + index} colSpan="11" style={{ textAlign: "center" }}>
                  <td style={{ width: "5%" }}>{i + 1}</td>
                  <td>{dat.cardName}</td>
                  <td><strong>№ {dat.outNumber}</strong> {dat.outDate}</td>
                  <td>№{dat.journalNumber} {dat.regDate}</td>
                  <td>{dat.signedAt}</td>
                  <td>
                    <strong>Ijrochilar: </strong>
                    {dat.inExecutors?.length > 0 && dat.inExecutors.map((d, r) => (
                      <span key={Math.random() * 10000 + data.content?.length + allCard?.length + index + r}>{(d?.firstName && d?.firstName?.length > 1) ? ((((d?.firstName[0].toUpperCase() === "S" || d?.firstName[0].toUpperCase() === "C") && d?.firstName[1].toUpperCase() === "H")) ? d?.firstName?.substring(0, 2) + ". " : d?.firstName?.substring(0, 1) + ". ") : ""}{d?.lastName}{dat.inExecutors?.length !== r + 1 && ","}&nbsp;</span>
                    ))}
                    <hr />
                    <span>{dat.resolutionContent}</span>
                  </td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                </tr>
              ))}
              {data.content?.length > 0 && (
                <tr>
                  <td colSpan="11">
                    <span className="text-center">
                      {data.content?.length > 0 && (
                        <ReactPaginate
                          breakLabel="..."
                          nextLabel=">>"
                          onPageChange={(e) => handlePageClick(e, name.value)}
                          pageRangeDisplayed={3}
                          pageCount={Math.ceil(data?.totalElements / 10)}
                          previousLabel="<<"
                          renderOnZeroPageCount={null}
                          className="paginationUL paginationULMon mt-2 "
                          activeClassName="active"
                          forcePage={selected}
                        />
                      )}
                    </span>
                  </td>
                </tr>
              )}
            </tbody>
          </>
        ))}
      </table>

      {/* alert */}
      <AlertContent alert={alert} />
    </>
  )
}

export default React.memo(TableContentData);