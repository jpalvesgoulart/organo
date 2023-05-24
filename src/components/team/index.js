import Profile from '../profile'
import './team.css'
import hexToRgba from 'hex-to-rgba';

const Team = ({ profiles, color, changeColor, id, name, onDelete, onFavorite }) => {
    return(
        (profiles.length > 0) && 
        <section className='team' style={{ backgroundColor: hexToRgba(color, '0.6') }}>
            <input onChange={e => changeColor(e.target.value, id)} value={color} type='color' className='input-color' />
            <h3 style={{ borderColor: color }}>{name}</h3>
            <div className='profiles'>
                {profiles.map((profile, i) => {
                    return (
                        <Profile 
                            backgroundColor={color} 
                            profile={profile} 
                            key={i} 
                            name={profile.name} 
                            image={profile.image} 
                            role={profile.role} 
                            onDelete={onDelete} 
                            onFavorite={onFavorite} 
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Team