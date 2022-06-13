import { useState } from 'react';
import { teamData } from '../../assets/utils/data';

export default function UpdateModal({ member, setValues, toggleUModal, onChange, onMod }) {
    const { id, name, email, team } = member;
    const [data, setData] = useState(member);
    const onReset = () => {
        setValues({
            id,
            name: '',
            email: '',
            team: ''
        });
    };

    return (
        <div className='modalUpdate'>
            <div className='modalBg'></div>
            <div className='modalContent'>
                <div className='modalHeader'>
                    <h2>수정</h2>
                    <span className='btnClose' onClick={toggleUModal}></span>
                </div>
                <div className='modalBody'>
                    <div>
                        <span>ID</span>
                        <input type='text' readOnly='readOnly' autoComplete='off' name='id' value={id} onChange={onChange} />
                    </div>
                    <div>
                        <span>NAME</span>
                        <input type='text' autoComplete='off' name='name' value={name} onChange={onChange} />
                    </div>
                    <div>
                        <span>EMAIL</span>
                        <input type='text' autoComplete='off' name='email' value={email} onChange={onChange} />
                    </div>
                    <div>
                        <span>TEAM</span>
                        <select name='team' value={team} onChange={onChange}>
                            {teamData.map((el) => (
                                <option value={el.id} key={el.id}>
                                    {el.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='btnArea'>
                        <button className='btn btnReset' onClick={onReset}>
                            초기화
                        </button>
                        <button className='btn btnReg' onClick={onMod}>
                            수정
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
