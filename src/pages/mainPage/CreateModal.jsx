import { useState } from 'react';
import { teamData } from '../../assets/utils/data';

export default function CreateModal({ toggleCModal, onCreate }) {
    const [values, setValues] = useState({
        id: '',
        name: '',
        email: '',
        team: ''
    });
    const { id, name, email, team } = values;

    const onChange = (e) => {
        const { value, name } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const onReset = () => {
        setValues({
            id: '',
            name: '',
            email: '',
            team: ''
        });
    };

    return (
        <div className='modalCreate'>
            <div className='modalBg'></div>
            <div className='modalContent'>
                <div className='modalHeader'>
                    <h2>사용자 추가</h2>
                    <span className='btnClose' onClick={toggleCModal}></span>
                </div>
                <div className='modalBody'>
                    <div>
                        <span>ID</span>
                        <input type='text' autoComplete='off' name='id' value={id} onChange={onChange} />
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
                        <button className='btn btnReg' onClick={() => onCreate(values)}>
                            등록
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
