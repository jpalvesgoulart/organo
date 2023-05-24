import { useState } from 'react'
import Button from '../button'
import Input from '../input'
import Select from '../select'
import './form.css'

const Form = ({ onRegister, teams, registerTeam }) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('')

    const onSave = (e) => {
        e.preventDefault()
        onRegister({
            name,
            role,
            image,
            team
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Input 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    value={name} 
                    onAlter={value => setName(value)} 
                />
                <Input 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={role} 
                    onAlter={value => setRole(value)} 
                />
                <Input 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    value={image} 
                    onAlter={value => setImage(value)}
                />
                <Select 
                    required={true} 
                    label="Time" 
                    itens={teams}
                    value={team} 
                    onAlter={value => setTeam(value)}
                />
                <Button>Criar Card</Button>
            </form>

            <form onSubmit={(e) => {
                e.preventDefault();
                registerTeam({ name: teamName, color: teamColor})
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Input 
                    required
                    label="Nome" 
                    placeholder="Digite o nome do time" 
                    value={teamName} 
                    onAlter={value => setTeamName(value)} 
                />
                <Input 
                    required
                    type='color'
                    label="Cor" 
                    placeholder="Digite a cor do time"
                    value={teamColor} 
                    onAlter={value => setTeamColor(value)} 
                />
                <Button>Criar um Novo Time</Button>
            </form>
        </section>
    )
}

export default Form