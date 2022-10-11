import { toCapitalize } from '../../util/capitalize';

const Option = (props) => {
    return (
        <option
            className="options"
            value={props.value}
            selected={props.selected}
        >
            {props.children ? props.children : toCapitalize(props.value)}
        </option>
    );
};

export default Option;
