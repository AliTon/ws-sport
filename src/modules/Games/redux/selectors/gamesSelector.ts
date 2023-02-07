import { RootState } from '../../../../configureApp/configureStore'
import exp from "constants";
import {ISport} from "../../interfaces";
import {createSelector} from "@reduxjs/toolkit";
import {stat} from "fs";

export const getGamesSelector = (state: RootState) => state.games.data
export const getActiveGameSelector = (state: RootState) => state.games.activeGameId;
export const getActiveRegionSelector = (state: RootState) => state.games.activeRegionId;
export const getActiveTournamentSelector = (state: RootState) => state.games.activeTournamentId;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getRegionsByActiveGameSelector = (state: RootState) => state.games.data[state.games.activeGameId] || {};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getActiveMatchesSelector =  (state: RootState) => state.games.data[state.games.activeGameId]?.regions[state.games.activeRegionId]?.tournaments[state.games.activeTournamentId] || {}

