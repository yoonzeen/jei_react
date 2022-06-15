import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { meetingroomCodeMap } from '../../../assets/utils/data';
import { editUse } from '../../../store/meetingrooms';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import changeDateFormat from '../../../assets/hooks/changeDateFormat';

export default function EditUse() {
    const { id } = useParams();
    const data = useSelector((state) => state.meetingrooms);
    const selectedData = data.find((el) => el.reservationId === id);
    const [rDate, setRDate] = useState(selectedData.reservationDate);
    const [values, setValues] = useState(selectedData);
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
            [name]: value
        });
    };
    const handleEdit = () => {
        if (values) {
            dispatch(editUse(values));
            navigate('/meetingroom/list');
        }
    };
    return (
        <>
            <div className='pageSubTitle'>
                <h3>예약 수정</h3>
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
                                renderInput={(params) => <TextField {...params} name='reservationDate' />}
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
                        <TextField autoComplete='off' onChange={onChange} name='usePurpose' value={usePurpose} />
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
                <button className='btn btnReg' onClick={handleEdit}>
                    수정
                </button>
                <Link className='btn btnReset ml10' to='/meetingroom/list'>
                    취소
                </Link>
            </div>
        </>
    );
}
