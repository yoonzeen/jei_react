import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { postSignIn } from '../../apis/api';

export default function SignInPage() {
    const navigate = useNavigate();
    const handleSignIn = async (googleUser) => {
        const googleToken = googleUser.getAuthResponse().id_token;
        await postSignIn(googleToken); //추가
        navigate('/main');
    };
    return (
        <div className='loginWrapper'>
            <div className='loginForm'>
                <h2>AI/IT기술개발실</h2>
                <h3>기술역량강화교육 프로젝트</h3>
                <p>
                    안녕하세요?
                    <br />
                    교육시스템팀 윤지은 전임연구원입니다.
                    <br />
                    저의 프로젝트를 보시기 전에, <br />
                    재능교육 이메일로 로그인을 하셔야 합니다.
                </p>
                <GoogleLogin
                    clientId='155084397162-o2fss1pcnc52givlo07uc76ntjfdt776.apps.googleusercontent.com'
                    buttonText='Login'
                    onSuccess={handleSignIn}
                    cookiePolicy={'single_host_origin'}
                    style={{ border: '10px solid black' }}
                />
            </div>
        </div>
    );
}
