import './Form.css';
import TextField from "../TextField";
import SelectList from '../SelectList';
import Button from '../button';

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

    const onSaving = (event) => {
        event.preventDefault();
        console.log('Form foi submetido');
    }

    return (
        <section className="formulario">
            <form onSubmit={onSaving}>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <TextField fieldRequired={true} label="Nome" placeholder="Digite seu nome" />
                <TextField ieldRequired={true} label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <SelectList ieldRequired={true} label="Times" itens={times} />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form;