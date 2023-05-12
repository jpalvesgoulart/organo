import './profile.css'

const Profile = ({ name, image, role, backgroundColor }) => {
    return (
        <div className='profile'>
            <div className='header' style={{backgroundColor: backgroundColor}}>
                <img src={image} alt={`Imagem de perfil do(a) ${name}`} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export default Profile