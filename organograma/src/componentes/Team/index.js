import Employee from '../Employee';
import './Team.css';

const Team = (props) => {
    return (
        (props.Employees.length > 0) ? <section className='time' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='colaboradores'>
                {props.Employees.map(colaborador => <Employee
                    bgColor={props.primaryColor}
                    key={colaborador.nome}
                    name={colaborador.nome}
                    position={colaborador.cargo}
                    image={colaborador.imagem}
                />)}
            </div>
        </section>
            : ''
    );
}

export default Team;