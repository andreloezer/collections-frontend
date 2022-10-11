import FormBox from '../../shared/components/FormBox/FormBox';
import Button from '../../shared/components/Button/Button';
import { toCapitalize } from '../../shared/util/capitalize';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';

const ItemSetup = (props) => {
    console.log('Render: ItemSetup');

    // Setup inputs
    const inputs = props.fields.map((field) => {
        const input = {
            name: field.name,
            label: toCapitalize(field.name),
            type: field.type,
            inputId: field.id,
            validators: [field.required && VALIDATOR_REQUIRE()],
            errorMessage: `Please enter a valid ${field.name}`,
        };

        if (props.item) {
            if (field.type === 'checkbox') {
                input['inline'] = true;
                input['checked'] = props.item.fields[field.id];
            } else {
                input['value'] = props.item.fields[field.id];
            }
        }
        return input;
    });

    // Setup submit button
    const footer = (
        <Button className="button-like" type="submit">
            {props.isNew ? 'Add item' : 'Edit item'}
        </Button>
    );

    return (
        <FormBox
            className="item-setup footer-center"
            header="Setup Item"
            footer={footer}
            onSubmit={props.onSubmit}
            inputs={inputs}
        />
    );
};

export default ItemSetup;
