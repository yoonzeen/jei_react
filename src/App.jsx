import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Main from './pages/mainPage/Main';
import MeetingRoom from './pages/meetingRoomPage';
import Edit from './pages/meetingRoomPage/EditSubPage/Edit';
import List from './pages/meetingRoomPage/ListSubPage/List';
import Create from './pages/meetingRoomPage/CreateSubPage/Create';
import { store } from './store';
const makeLayoutPage = (element) => <Wrapper>{element}</Wrapper>;
const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route exact path='main' element={makeLayoutPage(<Main />)}></Route>
                    <Route path='meetingroom/*' element={makeLayoutPage(<MeetingRoom />)}>
                        <Route path='list' element={<List />}></Route>
                        <Route path='create' element={<Create />}></Route>
                        <Route path='edit/:id' element={<Edit />}></Route>
                    </Route>
                    {/* <Route path='*' element={<SignInPage />}></Route> */}
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};
export default App;
