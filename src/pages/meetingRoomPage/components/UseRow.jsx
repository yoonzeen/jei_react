import { IconButton, TableCell, TableRow } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { meetingroomCodeMap } from '../../../assets/utils/data';
import { useNavigate } from 'react-router-dom';
import { deleteUse } from '../../../store/meetingrooms';

export default function UseRow({ row }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (reservationId) => {
        dispatch(deleteUse(reservationId));
    };

    return (
        <>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                    {row.reservationDate}
                </TableCell>
                <TableCell>{meetingroomCodeMap.find((el) => el.meetingroomCode === row.meetingroomCode).roomName}</TableCell>
                <TableCell>{row.usePurpose}</TableCell>
                <TableCell>{row.usePersonNumber}</TableCell>
                <TableCell>{row.userName}</TableCell>
                <TableCell>
                    <IconButton onClick={() => navigate('/meetingroom/edit/' + row.reservationId)}>
                        <Edit></Edit>
                    </IconButton>
                </TableCell>
                <TableCell>
                    <IconButton onClick={() => handleDelete(row.reservationId)}>
                        <Delete></Delete>
                    </IconButton>
                </TableCell>
            </TableRow>
        </>
    );
}
