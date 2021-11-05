import axios from "axios";

//https://neko-cafe-back.herokuapp.com/auth/test, body: {success: true},
export type RequestDataType = {
    success: boolean
}

export type ResponseType = {
    errorText: string
    info: string
    yourBody: {success: boolean}
    yourQuery: {}

}
export const requestsAPI = {
    postRequest(data: RequestDataType) {
        return axios.post<ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', data)
            .then(res => res.data)
    }
}

