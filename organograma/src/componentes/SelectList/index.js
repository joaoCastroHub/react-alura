import './SelectList.css';

const SelectList = (props) => {
    return (
        <div className='lista'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
                <option></option>
            </select>
        </div>
    );
}

export default SelectList;