import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {changeSuccessAC, requestToServerTC} from "./bll/requestsReducer";




function Request() {

    const dispatch = useDispatch()
    const success = useSelector<AppStoreType, boolean>(state => state.request.success)
    const messageOfResponse = useSelector<AppStoreType, string>(state => state.request.response.message)
    const isError = useSelector<AppStoreType>(state => state.request.response.error)
    const isBtnDisabled = useSelector<AppStoreType, boolean>(state => state.request.btnDisabled)


    const onChange = () => dispatch(changeSuccessAC())
    const onRequest = () => dispatch(requestToServerTC(success))

    return (
        <div>
            <SuperButton onClick={onRequest} disabled={isBtnDisabled}>
                send
            </SuperButton>

            <SuperCheckbox checked={success}
                           onChangeChecked={onChange}>
                success
            </SuperCheckbox>
            <div>
                Response:
                <span style={{color: isError ? 'red' : 'mediumaquamarine', margin: '10px'}}>
                    { messageOfResponse}
                </span>
            </div>
        </div>

    )
}


export default Request;