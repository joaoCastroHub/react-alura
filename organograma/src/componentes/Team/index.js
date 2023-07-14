import './Team.css';

const Team = (props) => {
    return (
        <section className='time' style={{backgroundColor:props.secondaryColor}}>
            <h3 style={{borderColor:props.primaryColor}}>{props.name}</h3>
        </section>
    );
}

export default Team;