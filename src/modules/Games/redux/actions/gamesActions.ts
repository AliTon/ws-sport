import { createAction } from '@reduxjs/toolkit';

export interface IRouterParams {
    gameId?: string,
    regionId?: string;
    tournamentId?: string
}

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
