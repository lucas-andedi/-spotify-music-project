import { useParams } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';

const SongDetails = () => {
    const { songid } = useParams();

    console.log(songid);
    return <div>SongDetails</div>;
} 

export default SongDetails;
