import './SelectList.css';

const SelectList = (props) => {
    return (
        <div className='lista'>
            <label>{props.label}</label>
            <select required={props.fieldRequired}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    );
}

export default SelectList;