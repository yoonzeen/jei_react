import { meetingroomCodeMap } from '../../../assets/utils/data';

export default function TextField({ data, onChange }) {
    const { reservationDate, meetingroomCode, usePurpose, usePersonNumber, userName } = data;

    return (
        <div className='meetingRoomForm'>
            <div>
                <span className='label'>일자</span>
                <span>
                    <input type='text' name='reservationDate' value={reservationDate} id='meetingCalendar' onChange={onChange} />
                </span>
            </div>
            <div>
                <span className='label'>회의실</span>
                <span>
                    <select name='meetingroomCode' value={meetingroomCode} onChange={onChange}>
                        {meetingroomCodeMap.map((el, index) => (
                            <option key={index} value={el.meetingCode}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                </span>
            </div>
            <div>
                <span className='label'>사용 내역</span>
                <span>
                    <input type='text' style={{ width: '350px' }} onChange={onChange} name='usePurpose' value={usePurpose} />
                </span>
            </div>
            <div>
                <span className='label'>인원</span>
                <span>
                    <input
                        type='number'
                        style={{ width: '45px' }}
                        min='1'
                        onChange={onChange}
                        name='usePersonNumber'
                        value={usePersonNumber}
                    />{' '}
                    명
                </span>
            </div>
            <div>
                <span className='label'>신청자</span>
                <span>
                    <input type='text' name='userName' onChange={onChange} value={userName} />
                </span>
            </div>
        </div>
    );
}
