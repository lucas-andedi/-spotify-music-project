import { useParams } form 'react-router-dom'

const SongDetails = () => {
    const { songid } = useParams()
    return <div>SongDetails</div>;
} 

export default SongDetails;
