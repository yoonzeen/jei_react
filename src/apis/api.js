import axios from 'axios';

const testClient = axios.create({ baseURL: 'http://localhost:3001' });
const createGetRequest = (url) => testClient.get(url).then((r) => r.data);
const createPostRequest = (url, body) => testClient.post(url, body).then((r) => r.data);
const createPatchRequest = (url, body) => testClient.patch(url, body).then((r) => r.data);
const createDeleteRequest = (url) => testClient.delete(url).then((r) => r.data);

if (localStorage.accessToken) testClient.defaults.headers = { Authorization: `Bearer ${localStorage.accessToken}` };

export const postSignIn = async (googleToken) => {
    const { accessToken } = await createPostRequest('sign-in', { googleToken });
    localStorage.accessToken = accessToken;
    testClient.defaults.headers = { Authorization: `Bearer ${accessToken}` };
};
export const postSignOut = async () => {
    const googleSignOut = async () => {
        const auth2 = window.gapi?.auth2?.getAuthInstance();
        await auth2?.signOut();
        auth2?.disconnect();
    };

    await Promise.all([createPostRequest('sign-out'), googleSignOut()]);

    // await createPostRequest('sign-out');
    // await googleSignOut();

    localStorage.removeItem('accessToken');
};
export const getReservations = () => createGetRequest('reservations');
export const postReservation = (reservation) => createPostRequest('reservation', reservation);

export const patchReservation = (reservation) => createPatchRequest(`reservation/${reservation.reservationId}`, reservation);
//reservations.map((el) => (el.reservationId === reservation.reservationId ? reservation : el));

export const deleteReservation = (id) => createDeleteRequest(`reservation/${id}`);
//reservations.filter((el) => el.reservationId !== reservation);
