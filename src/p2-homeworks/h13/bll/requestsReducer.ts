import {Dispatch} from "redux";
import {requestsAPI} from "./requests-api";

export type RequestStateType = typeof initState

const initState = {
    success: false,
    response: {message: '', error: false},
    btnDisabled: false
}

//catch (error) { console.log( {...error} ); console.log( error.response ? error.response.data.errorText : error.message );

export const requestReducer = (state: RequestStateType = initState, action: requestReducerActionsType): RequestStateType => {
    switch (action.type) {
        case 'mona/requestReducer/CHANGE_SUCCESS': {
            return {...state, success: !state.success}
        }
        case 'mona/requestReducer/SET_DISABLED': {
            return {...state, btnDisabled: action.btnDisabled}
        }
        case 'mona/requestReducer/SET_RESPONSE': {
            return {...state, response: {...action.response}}
        }
        default:
            return state;
    }
};


export type requestReducerActionsType =
    ReturnType<typeof changeSuccessAC>
    | ReturnType<typeof setResponseAC>
    | ReturnType<typeof setDisabledAC>

//* Action Creators ----------------------------------------------------------------------->
export const changeSuccessAC = () => ({type: 'mona/requestReducer/CHANGE_SUCCESS'} as const);
export const setDisabledAC = (btnDisabled: boolean) =>
    ({type: 'mona/requestReducer/SET_DISABLED', btnDisabled} as const)
export const setResponseAC = (response: { message: string, error: boolean }) =>
    ({type: 'mona/requestReducer/SET_RESPONSE', response} as const)


//* Thunk Creators ----------------------------------------------------------------------->
export const requestToServerTC = (success: boolean) => (dispatch: Dispatch<requestReducerActionsType>) => {
    dispatch(setDisabledAC(true))
    requestsAPI.postRequest({success: success})
        .then(data => {
            dispatch(setResponseAC({message: data.errorText, error: false}))
            dispatch(setDisabledAC(false))
        })
        .catch(error => {
            let errorText = error.response ? error.response.data.errorText : error.message
            dispatch(setResponseAC({message: errorText, error: true}))
            dispatch(setDisabledAC(false))
        })
}