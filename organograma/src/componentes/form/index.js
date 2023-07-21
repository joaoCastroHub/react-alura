import './Form.css';
import TextField from "../TextField";
import SelectList from '../SelectList';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const onSaving = (event) => {
        event.preventDefault();
        props.onColaboradorRegistered({
            nome,
            cargo,
            imagem,
            time
        });
        setCargo('');
        setImagem('');
        setNome('');
        setTime('');
    }

    return (
        <section className="formulario">
            <form onSubmit={onSaving}>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <TextField inputValue={nome} onChanged={inputValue => setNome(inputValue)} fieldRequired={true} label="Nome" placeholder="Digite seu nome" />
                <TextField inputValue={cargo} onChanged={inputValue => setCargo(inputValue)} ieldRequired={true} label="Cargo" placeholder="Digite seu cargo" />
                <TextField inputValue={imagem} onChanged={inputValue => setImagem(inputValue)} label="Imagem" placeholder="Digite o endereço da imagem" />
                <SelectList inputValue={time} onChanged={inputValue => setTime(inputValue)} fieldRequired={true} label="Times" itens={props.times} />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form;