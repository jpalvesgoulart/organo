import Profile from '../profile'
import './team.css'

const Team = (props) => {
    return(
        (props.profiles.length > 0) &&
        <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='profiles'>
                {props.profiles.map(profile => <Profile backgroundColor={props.primaryColor} key={profile.name} name={profile.name} image={profile.image} role={profile.role} />)}
            </div>
        </section>
    )
}

export default Team