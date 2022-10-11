import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPencilAlt,
    faTrashAlt,
    faPlus,
    faEraser
} from '@fortawesome/free-solid-svg-icons';


import './FieldTableRow.css';
import { toCapitalizeAll } from '../../../../shared/util/capitalize';
import Button from '../../../../shared/components/Button/Button';


const FieldRow = props => {

    // Define <tr> attributes
    const trOpts = {
        dataset: {
            fieldId: props.id,
            fieldStatis: props.status
        },
        className: 'field-row'
    };

    // Edit field
    const editFieldHandler = () => {
        // Should call add field modal filled with current field info
        props.editField(props.id);
    };

    // Delete field
    const deleteFieldHandler = () => {
        props.deleteField(props.id);
    };

    return (
        <tr {...trOpts}>
            <td className="field-name" headers="name">
                {toCapitalizeAll(props.name)}
            </td>
            <td className="field-type" headers="type">
                {toCapitalizeAll(props.type)}
            </td>
            <td className="field-required" headers="required">
                {props.required ? 'Yes' : 'No'}
            </td>
            <td className="options">
                <Button
                    type="button"
                    className="icon edit-field-btn"
                    title="Edit field"
                    onClick={() => editFieldHandler()}
                >
                    <FontAwesomeIcon icon={faPencilAlt} />
                </Button>
            </td>
            <td>
                <Button
                    type="button"
                    className="icon remove-field-btn"
                    title="Delete field"
                    onClick={() => deleteFieldHandler()}
                >
                    <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
            </td>
        </tr>
    );
};


export default FieldRow