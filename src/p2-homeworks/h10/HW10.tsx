import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, LoadingReducerActionsType} from "./bll/loadingReducer";
import {Dispatch} from "redux";
import loadIcon from "../h10/assets/spiner.gif"

function HW10() {
    const dispatch = useDispatch<Dispatch<LoadingReducerActionsType>>();
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)


    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(() => dispatch(loadingAC()), 2000)
        console.log('loading...')
    }

    return (<div>
            <hr/>
            <h3>homework 10</h3>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <img style={{height: '70px', width: '100px'}} src={loadIcon} alt="wait for loading"/>
                    </div>
                ) : (
                    <div>
                        <SuperButton style={{height: '30px', width: '90px'}} onClick={setLoading}>set
                            loading</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}


export default HW10
