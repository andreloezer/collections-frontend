import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import InputBox from '../../../../shared/components/Input/Input';
import Button from '../../../../shared/components/Button/Button';
import './ItemRow.css';

const ItemRow = (props) => {
    console.log('Render: ItemRow');

    const editItem = () => {
        props.editItem(props.index);
    };

    const deleteItem = () => {
        props.deleteItem(props.index);
    };

    // Generate column elements
    const colList = [];
    // Add select checkbox if item is editable
    if (props.editable) {
        colList.push(
            <div key={0} className="option-checkbox">
                <InputBox
                    type="checkbox"
                    name="select-item"
                    noLabel
                    checked={props.selected}
                    onChange={(event) =>
                        props.selectItem(props.index, event.target.checked)
                    }
                />
            </div>
        );
    }
    // Create item data columns
    for (const field of props.fields) {
        let value;
        if (field.type === 'checkbox') {
            value = props.item.fields[field.id] ? 'Yes' : 'No';
        } else {
            value = props.item.fields[field.id];
        }

        const colEl = (
            <div
                className={value || 'col-empty'}
                data-headers={field.name}
                key={colList.length}
            >
                {value || 'empty'}
            </div>
        );
        colList.push(colEl);
    }

    // Add options buttons if item is editable
    if (props.editable) {
        colList.push(
            <div key={colList.length} className="item-options">
                <Button onClick={editItem} className="icon">
                    <FontAwesomeIcon icon={faPencilAlt} />
                </Button>
                <Button onClick={deleteItem} className="icon">
                    <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
            </div>
        );
    }

    return <li className="item-row">{colList}</li>;
};

export default ItemRow;
