import { useState } from 'react'
import Button from '../button'
import Input from '../input'
import Select from '../select'
import './form.css'

const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (e) => {
        e.preventDefault()
        props.onRegister({
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
                    itens={props.teams}
                    value={team} 
                    onAlter={value => setTeam(value)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form