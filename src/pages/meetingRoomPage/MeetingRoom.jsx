import { Outlet } from 'react-router-dom';

export default function MeetingRoom() {
    return (
        <>
            <div className='pageTitle'>
                <h2>회의실 예약</h2>
            </div>
            <Outlet />
        </>
    );
}
