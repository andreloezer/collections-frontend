import FormBox from '../../../shared/components/FormBox/FormBox';
import Button from '../../../shared/components/Button/Button';
import { toCapitalize } from '../../../shared/util/capitalize';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
} from '../../../shared/util/validators';
import './AddFieldForm.css';

const AddFieldForm = (props) => {
    // Field types
    const supportedTypes = ['text', 'number', 'select', 'checkbox'];

    // Inputs setup
    const inputs = [
        {
            name: 'name',
            type: 'text',
            label: 'Name',
            inputId: 'name',
            value: props.name,
            displayValue: toCapitalize(props.name),
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)],
            errorMessage: 'Please enter a valid name',
        },
        {
            name: 'type',
            type: 'select',
            label: 'Type',
            inputId: 'type',
            value: supportedTypes[0],
            options: supportedTypes,
            validators: [VALIDATOR_REQUIRE()],
        },
        {
            name: 'required',
            type: 'checkbox',
            label: 'Is Required?',
            inputId: 'required',
            checked: props.required,
            inline: true,
            validators: [],
        },
    ];

    const footer = (
        <Button className="button-like" type="submit">
            {props.isNew ? 'Add field' : 'Edit field'}
        </Button>
    );

    return (
        <FormBox
            className="add-field-form form-box footer-center"
            header="Setup Field"
            footer={footer}
            onSubmit={props.onSubmit}
            inputs={inputs}
        />
    );
};

export default AddFieldForm;
