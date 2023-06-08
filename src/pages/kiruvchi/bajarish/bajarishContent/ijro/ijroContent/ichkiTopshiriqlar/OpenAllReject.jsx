import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { Alert } from "../../../../../../../component/alert/Alert";
import { axiosInstance } from "../../../../../../../config";

const OpenAllReject = ({ setHokimRadEtish, alert, setAlert, data, setData }) => {
    const history = useHistory()
    const { id } = useParams()

    console.log(data);

    // rad etish
    const rejectFunc = async () => {
        let textarea = document.querySelector('.closedIjroTextArea').value;

        const list = []
        data?.inExecutorInformationList?.forEach((item) => {
            if (item?.documentStatus === "IN_PROCESS") {
                list.push({
                    documentId: id,
                    workPlaceId: item?.workPlaceId,
                    tabName: item?.tabName,
                    comment: textarea,
                })
            }
        })

        console.log(list);


        if (textarea.length > 0) {
            try {
                const res = await axiosInstance.post("controlling/rejectAll", list)
                console.log(res.data);
                setHokimRadEtish(false);
                Alert(setAlert, "success", "Barcha hujjat rad etildi");

                setTimeout(() => {
                    history.push("/kiruvchi/maxsusNazorat")
                }, [2000])

            } catch (error) {
                console.log(error.response);
            }
        } else {
            Alert(setAlert, "warning", "Izoh yozish majburiy");
            setHokimRadEtish(false);
        }
    }

    return (
        <div className="adminWindow text-center">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-primary text-white">
                        <h6 className="modal-title">Barchasini rad etish oynasi:</h6>
                    </div>
                    <div className="modal-body ">
                        <textarea
                            name=""
                            rows="8"
                            className="form-control closedIjroTextArea"
                            placeholder="Izoh..."
                        >
                        </textarea>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-link bekorQilish" onClick={() => setHokimRadEtish(false)}>Yopish</button>
                        <button type="button" className="btn btn-success" onClick={() => rejectFunc()}>Tasdiqlash</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(OpenAllReject);