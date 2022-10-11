import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import Button from '../../../shared/components/Button/Button';
import CollectionInfoCard from './CollectionInfoCard';
import Input from '../../../shared/components/Input/Input';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
} from '../../../shared/util/validators';
import './CollectionInfo.css';

const CollectionInfo = (props) => {
    let displayEl;

    if (
        !props.name &&
        !props.description &&
        typeof props.public === 'undefined'
    ) {
        displayEl = (
            <section className="collection-info collection-info__no-info">
                <p>Your collection have no info!</p>
                <span> Add an info now:</span>
                <Button
                    onClick={props.editInfo}
                    type="button"
                    className="plus-btn icon"
                    title="Add info"
                >
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </section>
        );
    } else {
        displayEl = (
            <section className="collection-info">
                <div className="collection-info__flex">
                    <h2>Main Info</h2>
                    <Button onClick={props.editInfo} type="button" className="icon">
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </Button>
                </div>
                <CollectionInfoCard
                    className="collection-info__name"
                    name="name"
                    editInfo={props.editInfo}
                    value={props.name}
                >
                    {props.name || `Add a name`}
                </CollectionInfoCard>

                <CollectionInfoCard
                    className="collection-info__description"
                    name="description"
                    editInfo={props.editInfo}
                    value={props.description}
                >
                    {props.description || `Add a description`}
                </CollectionInfoCard>
                <p className="collection-info__publicity">
                    {props.public
                        ? 'This collection is public'
                        : 'This collection is private'}
                </p>
            </section>
        );
    }

    return displayEl;

    return (
        // Add value as props to Input
        <section className="collection-info">
            <div className="collection-info__flex">
                <h2>Main Info</h2>
                <Button onClick={props.editInfo} type="button" className="icon">
                    <FontAwesomeIcon icon={faPencilAlt} />
                </Button>
            </div>

            {/* <Input
                type="text"
                name="name"
                value={props.name}
                label="Name"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
                errorMessage="Please enter a valid name."
            /> */}
            <CollectionInfoCard
                className="collection-info__name"
                name="name"
                editInfo={props.editInfo}
                value={props.name}
            >
                {props.name || `Add a ${props.name} to the collection`}
            </CollectionInfoCard>

            <CollectionInfoCard
                className="collection-info__description"
                name="description"
                editInfo={props.editInfo}
                value={props.description}
            >
                {props.description || `Add a ${props.name} to the collection`}
            </CollectionInfoCard>

            {/* <Input
                type="textarea"
                name="description"
                value={props.description}
                rows="4"
                label="Description"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
                errorMessage="Please enter a valid description."
            /> */}
            {/* <Input
                type="checkbox"
                name="public"
                checked={props.public}
                label="Make it public?"
                validators={[]}
                inline
            /> */}
            <p className="collection-info__publicity">
                {props.public
                    ? 'This collection is public'
                    : 'This collection is private'}
            </p>

            {/* <CollectionInfoCard
                name="is public?"
                editInfo={props.editInfo}
                value={props.public}
            >
                {props.public
                    ? 'This collection is public'
                    : 'This collection is private'}
            </CollectionInfoCard> */}
        </section>
    );
};

export default CollectionInfo;
