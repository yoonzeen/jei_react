import { teamData } from '../../assets/utils/data';
import { useState, useRef } from 'react';
export default function SearchArea({ setSearchTeam }) {
    const [values, setValues] = useState({
        team: '',
        member: ''
    });

    const { team, member } = values;
    const inputRef = useRef();

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    return (
        <div className='searchArea'>
            <div className='searchForm'>
                <span>Team</span>
                <select name='team' value={team} onChange={onChange}>
                    {teamData.map((item, i) => (
                        <option key={i} value={item.id}>
                            {item.name}
                        </option>
                    ))}
                </select>
                {/* <span>Name</span>
                <input type='text' value={member} name='member' onChange={onChange} ref={inputRef} /> */}
                <span className='btnArea'>
                    <button className='btn btnSearch' onClick={() => setSearchTeam(team)}>
                        검색
                    </button>
                </span>
            </div>
        </div>
    );
}
