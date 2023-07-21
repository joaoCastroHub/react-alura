import './SelectList.css';

const SelectList = (props) => {
    return (
        <div className='lista'>
            <label>{props.label}</label>
            <select onChange={event => props.onChanged(event.target.value)} required={props.fieldRequired} value={props.inputValue}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    );
}

export default SelectList;