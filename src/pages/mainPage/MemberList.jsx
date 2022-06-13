import { useMemo } from 'react';
import Member from './Member';

export default function MemberList({ list, setList, searchTeam, setUModalHidden, setUserTargetIndex, setValues }) {
    const filteredList = useMemo(() => {
        return list.filter((el) => (searchTeam === 'T000' ? true : el.team === searchTeam));
    }, [list, searchTeam]);
    const onDelete = (id) => {
        setList(list.filter((el) => el.id !== id));
    };
    return (
        <div className='resultArea'>
            <div className='memberList'>
                <ul>
                    {filteredList.map((member, index) => (
                        <Member
                            member={member}
                            key={member.id}
                            onDelete={onDelete}
                            setUModalHidden={setUModalHidden}
                            setUserTargetIndex={setUserTargetIndex}
                            index={index}
                            setValues={setValues}
                            searchTeam={searchTeam}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
