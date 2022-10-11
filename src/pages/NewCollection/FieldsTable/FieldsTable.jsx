import React from 'react';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FieldTableRow from './FieldTableRow/FieldTableRow';
import Button from '../../../shared/components/Button/Button';
import './FieldsTable.css';

const FieldsTable = (props) => {
    // Delete field
    const deleteFieldHandler = (field) => {
        // USE REDUX HERE???
        props.deleteField(field);
    };

    // Edit field
    const editFieldHandler = (field) => {
        props.editField(field);
    };

    // Add field
    const addFieldHandler = () => {
        props.addField();
    };

    // Setup fields display
    let fieldsDisplay;
    if (props.fields && props.fields.length) {
        let fieldsRows = [];
        for (const field of props.fields) {
            fieldsRows.push(
                <FieldTableRow
                    name={field.name}
                    id={field.id}
                    key={field.id}
                    status={field.status}
                    type={field.type}
                    required={field.required}
                    deleteField={deleteFieldHandler}
                    editField={editFieldHandler}
                />
            );
        }
        fieldsDisplay = (
            <table className="fields-table">
                <thead>
                    <tr>
                        <th id="name">Name</th>
                        <th id="type">Type</th>
                        <th id="required">Is required?</th>
                        <th colSpan="2">Options</th>
                    </tr>
                </thead>
                <tbody>{fieldsRows}</tbody>
            </table>
        );
    } else {
        fieldsDisplay = (
            <React.Fragment>
                <p>Your collection have no fields!</p>
                <span>Add a field:</span>
            </React.Fragment>
        );
    }

    return (
        <section className="collection-fields">
            <h2>Fields</h2>
            {fieldsDisplay}
            <Button
                className="icon plus-btn"
                type="button"
                title="Add new field"
                onClick={addFieldHandler}
            >
                <FontAwesomeIcon icon={faPlus} />
            </Button>
        </section>
    );
};

export default FieldsTable;
