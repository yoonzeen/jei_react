import { teamData } from '../../assets/utils/data';
import preventScroll from '../../assets/hooks/preventScroll';
export default function Member({ member, onDelete, setUModalHidden, setUserTargetIndex, index, setValues }) {
    const { id, name, email, team } = member;
    const teamName = teamData.find((el) => el.id === team).name;
    return (
        <li>
            <div className='btnArea'>
                <span
                    className='btn btnMod'
                    onClick={() => {
                        setValues({
                            id,
                            name,
                            email,
                            team
                        });
                        setUserTargetIndex(index);
                        setUModalHidden((state) => false);
                        preventScroll(false);
                    }}>
                    수정
                </span>
                <span className='btn btnDel' onClick={() => onDelete(id)}>
                    삭제
                </span>
            </div>
            <div>
                <h3>{name}</h3>
                <div>{email}</div>
                <div>{teamName}</div>
            </div>
        </li>
    );
}
