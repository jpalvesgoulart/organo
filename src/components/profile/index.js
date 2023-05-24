import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './profile.css'

const Profile = ({ onDelete, backgroundColor, profile, onFavorite }) => {
    function favorite() {
        onFavorite(profile.id);
    }

    const propsFavorite = {
        size: 25,
        onClick: favorite,
    }

    return (
        <div className='profile'>
            
            <AiFillCloseCircle 
                size={25} 
                className='delete' 
                onClick={() => onDelete(profile.id)} 
            />
            <div className='header' style={{backgroundColor: backgroundColor}}>
                <img src={profile.image} alt={`Imagem de perfil do(a) ${profile.name}`} />
            </div>
            <div className='footer'>
                <h4>{profile.name}</h4>
                <h5>{profile.role}</h5>
                <div className='favorite'>
                    {profile.favorite 
                        ? <AiFillHeart {...propsFavorite} color='#ff0000' /> 
                        : <AiOutlineHeart {...propsFavorite} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile