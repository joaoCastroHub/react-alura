import './Form.css';
import TextField from "../TextField";
import SelectList from '../SelectList';

const Form = () => {
    
    const times = [
        'steven Universo',
        'pokemon',
        'Canon Busters',
        'Sakura Card Captors',
        'Hamtaro',
        'Digimon',
        'Magi'
    ];


    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <SelectList label="Times" itens={times} />
            </form>
        </section>
    )
}

export default Form;