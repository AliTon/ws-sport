import { createAction } from '@reduxjs/toolkit'
import {IRouterParams} from "../../interfaces";


export const initGameSocketAction = createAction(
    'INIT_GAMES_SOCKET',
    function (params: IRouterParams) {
        return {
            payload: {
                params,
            },
        }
    }
)
