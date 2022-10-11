import { useState, useEffect } from "react";


const Checkbox = props => {

    const [ isChecked, setIsChecked ] = useState(props.checked ? true : false);

    useEffect(() => {
        setIsChecked(prevState => props.checked ? true : false);
    }, [props.checked]);

    const toggleCheckbox = event => {
        setIsChecked(prevState => event.target.checked);
        props.valueChange(event.target.checked);
    };

    return (
        <input
            name={props.name}
            type='checkbox'
            checked={isChecked}
            onChange={toggleCheckbox}
        />
    );
};


export default Checkbox;