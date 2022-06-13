import { meetingRoomData } from '../assets/utils/data';
//액션 type
const ADD_USE = 'meetingrooms/ADD_USE';
const EDIT_USE = 'meetingrooms/EDIT_USE';
const DELETE_USE = 'meetingrooms/DELETE_USE';

//액션 생성 함수
export const addUse = (meetingroom) => ({ type: ADD_USE, payload: meetingroom });
export const editUse = (meetingroom) => ({ type: EDIT_USE, payload: meetingroom });
export const deleteUse = (id) => ({ type: DELETE_USE, payload: id });

//리듀서
export default function meetingrooms(state = meetingRoomData, { type, payload }) {
    switch (type) {
        case ADD_USE:
            return [...state, payload];
        case EDIT_USE:
            return state.map((el) => (el.reservationId === payload.reservationId ? payload : el));
        case DELETE_USE:
            return state.filter((el) => el.reservationId !== payload);
        default:
            return state;
    }
}
