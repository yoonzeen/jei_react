import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { meetingroomCodeMap } from '../../../assets/utils/data';
import { addUse } from '../../../store/meetingrooms';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import changeDateFormat from '../../../assets/hooks/changeDateFormat';
import { nanoid } from 'nanoid';

export default function AddUse() {
    const [rDate, setRDate] = useState(null);

    const [values, setValues] = useState({
        reservationId: '',
        reservationDate: '',
        meetingroomCode: '01',
        usePurpose: '',
        usePersonNumber: '',
        userName: ''
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { meetingroomCode, usePurpose, usePersonNumber, userName } = values;

    const onChangeDate = (newDate) => {
        const newDateFormat = changeDateFormat(newDate);
        setRDate(newDate);
        setValues({ ...values, reservationDate: newDateFormat });
    };
    const onChange = (e) => {
        const { value, name } = e.target;
        if (name === 'usePersonNumber' && value < 1) {
            alert('인원은 1명 이상이어야 합니다.');
            return;
        }
        setValues({
            ...values,
            [name]: value,
            reservationId: nanoid()
        });
    };
    const handleAdd = () => {
        if (values) {
            dispatch(addUse(values));
            navigate('/meetingroom/list');
        }
    };
    return (
        <>
            <div className='pageSubTitle'>
                <h3>예약 신청</h3>
            </div>
            <div className='meetingRoomForm'>
                <div>
                    <span className='label'>일자</span>
                    <div className='dateArea'>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label=''
                                value={rDate}
                                onChange={onChangeDate}
                                renderInput={(params) => <TextField {...params} name='reservationDate' value={rDate} />}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
                <div>
                    <span className='label'>회의실</span>
                    <span>
                        <select name='meetingroomCode' value={meetingroomCode} onChange={onChange}>
                            {meetingroomCodeMap.map((el, index) => (
                                <option key={index} value={el.meetingroomCode}>
                                    {el.roomName}
                                </option>
                            ))}
                        </select>
                    </span>
                </div>
                <div className='longInput'>
                    <span className='label'>사용 내역</span>
                    <span>
                        <TextField style={{ width: '350px' }} autoComplete='off' onChange={onChange} name='usePurpose' value={usePurpose} />
                    </span>
                </div>
                <div className='numberInput'>
                    <span className='label'>인원</span>
                    <span>
                        <TextField
                            type='number'
                            style={{ width: '75px' }}
                            min='1'
                            onChange={onChange}
                            name='usePersonNumber'
                            value={usePersonNumber}
                        />
                        &nbsp;명
                    </span>
                </div>
                <div>
                    <span className='label'>신청자</span>
                    <span>
                        <TextField type='text' name='userName' autoComplete='off' onChange={onChange} value={userName} />
                    </span>
                </div>
            </div>

            <div className='btnArea ml30 mt20'>
                <button className='btn btnReg' onClick={handleAdd}>
                    등록
                </button>
                <Link className='btn btnReset ml10' to='/meetingroom/list'>
                    취소
                </Link>
            </div>
        </>
    );
}
