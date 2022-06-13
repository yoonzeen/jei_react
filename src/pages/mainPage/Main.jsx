import SearchArea from './SearchArea';
import MemberList from './MemberList';
import CreateModal from './CreateModal';
import UpdateModal from './UpdateModal';
import { useState } from 'react';
import { userData } from '../../assets/utils/data';
import preventScroll from '../../assets/hooks/preventScroll';

export default function Main() {
    const [values, setValues] = useState({
        id: '',
        name: '',
        email: '',
        team: ''
    });
    const [list, setList] = useState(userData);
    const [cModalHidden, setCModalHidden] = useState(true);
    const [uModalHidden, setUModalHidden] = useState(true);
    const [userTargetIndex, setUserTargetIndex] = useState(0);
    const [searchTeam, setSearchTeam] = useState('T000');
    const onChange = (e) => {
        const { value, name } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const idCheck = (_id) => {
        return list.find(({ id }) => id === _id);
    };

    const onCreate = (values) => {
        const { id, name, email, team } = values;
        if (id && name && email && team) {
            if (idCheck(id)) {
                alert('아이디 중복');
                return;
            }
            setList([...list, { id, name, email, team }]);
            toggleCModal();
        } else {
            alert('모두 작성해주세요.');
        }
    };
    const onMod = () => {
        const modList = list.map((el, i) => {
            if (userTargetIndex === i) el = values;
            return el;
        });
        setList(modList);
        toggleUModal();
    };
    const toggleCModal = () => {
        setCModalHidden(!cModalHidden);
        preventScroll(!cModalHidden);
    };
    const toggleUModal = () => {
        setUModalHidden(!uModalHidden);
        preventScroll(!uModalHidden);
    };

    return (
        <>
            <div className='pageTitle'>
                <h2>사용자 리스트</h2>
            </div>
            <span className='btnAdd' onClick={toggleCModal}></span>
            <SearchArea setSearchTeam={setSearchTeam} />
            <MemberList
                list={list}
                setList={setList}
                searchTeam={searchTeam}
                toggleUModal={toggleUModal}
                setUModalHidden={setUModalHidden}
                setUserTargetIndex={setUserTargetIndex}
                setValues={setValues}
            />
            {!cModalHidden && <CreateModal toggleCModal={toggleCModal} onCreate={onCreate} />}
            {!uModalHidden && (
                <UpdateModal toggleUModal={toggleUModal} onChange={onChange} member={values} setValues={setValues} onMod={onMod} />
            )}
        </>
    );
}
