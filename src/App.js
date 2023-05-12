import { useState } from 'react';
import Banner from './components/banner';
import Form from './components/form';
import Team from './components/team';
import Footer from './components/footer';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    },
  ]

  const [profiles, setProfiles] = useState([])

  const onAddProfile = profile => {
    setProfiles([...profiles, profile])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onRegister={profile => onAddProfile(profile)} />

      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor} 
        profiles={profiles.filter(profile => profile.team === team.name)}
      />)}

      <Footer />
    </div>
  );
}

export default App;
