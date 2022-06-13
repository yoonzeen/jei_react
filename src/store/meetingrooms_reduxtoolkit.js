import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteReservation, getReservations, patchReservation, postReservation } from '../apis/api';
export const getReservationsThunk = createAsyncThunk('meetingRoom/getReservations', getReservations);
export const postReservationThunk = createAsyncThunk('meetingRoom/postReservation', postReservation);
export const patchReservationThunk = createAsyncThunk('meetingRoom/patchReservation', patchReservation);
export const deleteReservationThunk = createAsyncThunk('meetingRoom/deleteReservation', deleteReservation);

const meetingrooms = createSlice({
    name: 'meetingrooms',
    initialState: { loading: false, data: null, error: null },
    // reducers: {
    //     addUse(state, { payload }) {
    //         state.data.push(payload);
    //     },
    //     editUse(state, { payload }) {
    //         state.data = state.data.map((el) => (el.reservationId === payload.reservationId ? payload : el));
    //     },
    //     deleteUse(state, { payload }) {
    //         state.data = state.data.filter((el) => el.reservationId !== payload);
    //     }
    // },
    extraReducers: {
        [getReservationsThunk.pending](state) {
            state.loading = true;
        },
        [getReservationsThunk.fulfilled](state, { payload }) {
            state.loading = false;
            state.data = payload;
        },
        [getReservationsThunk.rejected](state, { error }) {
            state.loading = false;
            state.error = error;
        },
        [postReservationThunk.pending](state) {
            state.loading = true;
        },
        [postReservationThunk.fulfilled](state, { payload }) {
            state.loading = false;
            state.data = null;
        },
        [postReservationThunk.rejected](state, { error }) {
            state.loading = false;
            state.error = error;
        },
        [patchReservationThunk.pending](state) {
            state.loading = true;
        },
        [patchReservationThunk.fulfilled](state, { payload }) {
            state.loading = false;
            state.data = null;
        },
        [patchReservationThunk.rejected](state, { error }) {
            state.loading = false;
            state.error = error;
        },
        [deleteReservationThunk.pending](state) {
            state.loading = true;
        },
        [deleteReservationThunk.fulfilled](state, { payload }) {
            state.loading = false;
            state.data = null;
        },
        [deleteReservationThunk.rejected](state, { error }) {
            state.loading = false;
            state.error = error;
        }
    }
});

// export const { addUse, editUse, deleteUse } = meetingrooms.actions;
export default meetingrooms.reducer;
