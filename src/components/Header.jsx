import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postSignOut } from '../apis/api';
import { init } from '../store';
import { flushSync } from 'react-dom';
export default function Header() {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const handleLogout = () => {
    //     postSignOut().then(() => {
    //         flushSync(() => {
    //             navigate('/sign-in');
    //             dispatch(init());
    //         });
    //     });
    // };
    return (
        <div className='header'>
            <h1>AI/IT기술개발실</h1>
            <div style={{ display: 'inline-block' }}>
                <span>
                    <Link to='/'>사용자 리스트</Link>
                </span>
                <span>
                    <Link to='/meetingroom/list'>회의실 예약</Link>
                </span>
            </div>
            {/* <span className='btnLogout' onClick={handleLogout}>
                로그아웃
            </span> */}
        </div>
    );
}
