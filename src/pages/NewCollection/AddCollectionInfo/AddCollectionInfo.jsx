import FormBox from '../../../shared/components/FormBox/FormBox';
import Button from '../../../shared/components/Button/Button';
import { toCapitalize } from '../../../shared/util/capitalize';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
} from '../../../shared/util/validators';

const AddCollectionInfo = (props) => {
    const inputs = [
        {
            name: 'name',
            type: 'text',
            label: 'Name',
            inputId: 'name',
            value: props.name,
            displayValue: toCapitalize(props.name),
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)],
            errorMessage: 'Please enter a valid name.',
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Description',
            inputId: 'description',
            value: props.description,
            displayValue: toCapitalize(props.description),
            validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)],
            errorMessage: 'Please enter a valid description.',
        },
        {
            name: 'public',
            type: 'checkbox',
            label: 'Make it public?',
            inputId: 'public',
            checked: props.public,
            inline: true,
            displayValue: toCapitalize(props.description),
            validators: [],
            errorMessage: 'Please enter a valid description.',
        },
    ];

    const footer = (
        <Button className="button-like" type="submit">
            {props.isNew ? 'Add Info' : 'Edit Info'}
        </Button>
    );

    return (
        <FormBox
            className="form-box footer-center form-box--large"
            header="Collection Info"
            inputs={inputs}
            footer={footer}
            onSubmit={props.onSubmit}
        />
    );
};

export default AddCollectionInfo;
