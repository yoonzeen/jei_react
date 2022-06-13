import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UseRow from './UseRow';
export default function useList() {
    const data = useSelector((state) => state.meetingrooms);
    return (
        <>
            <span className='btnAdd txt'>
                <Link to='/meetingroom/create'>예약하기</Link>
            </span>
            <div className='tableWrap'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>일자</TableCell>
                                <TableCell align='center'>회의실</TableCell>
                                <TableCell align='center'>사용내역</TableCell>
                                <TableCell align='center'>인원</TableCell>
                                <TableCell align='center'>신청자</TableCell>
                                <TableCell align='center'>수정</TableCell>
                                <TableCell align='center'>삭제</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data !== [] ? (
                                data.map((row) => (
                                    <UseRow key={row.reservationId} row={row} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} />
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell align='center'>데이터가 없습니다.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}
