import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const loggedUser = (state: RootState) => state.auth.userInfo;
export const isLoading = (state: RootState) => state.auth.isLoading;
