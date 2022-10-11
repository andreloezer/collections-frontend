import { useState, useEffect } from 'react';

import CollectionInfo from './CollectionInfo/CollectionInfo';
import FieldsTable from './FieldsTable/FieldsTable';
import AddFieldForm from './AddFieldForm/AddFieldForm';
import AddCollectionInfo from './AddCollectionInfo/AddCollectionInfo';
import Modal from '../../layout/Modal/Modal';
import { isObjEqual } from '../../shared/util/isObjEqual';
import { getUniqueId } from '../../shared/util/getUniqueId';
import './NewCollection.css';

const NewCollection = () => {
    const [collectionStructure, setCollectionStructure] = useState({});
    const [isFieldModalUp, setIsFieldModalUp] = useState(false);
    const [isInfoModalUp, setIsInfoModalUp] = useState(false);
    const [currentField, setCurrentField] = useState({});

    useEffect(() => {
        const dummyCollection = {
            name: 'Dummy Collection',
            description: 'A description for the dummy collection',
            public: true,
            fields: [
                {
                    id: 5,
                    name: 'name',
                    required: true,
                    type: 'text',
                    status: 'original',
                },
                {
                    id: 6,
                    name: 'artist',
                    required: true,
                    type: 'text',
                    status: 'original',
                },
                {
                    id: 7,
                    name: 'release',
                    required: true,
                    type: 'number',
                    status: 'original',
                },
                {
                    id: 8,
                    name: 'tracks',
                    required: false,
                    type: 'number',
                    status: 'original',
                },
                {
                    id: 11,
                    name: 'cover art',
                    required: false,
                    type: 'image',
                    status: 'original',
                },
            ],
            id: 2,
            user_id: 3,
        };

        // Fetch collection info
        const getCollection = async () => {
            setTimeout(() => {
                setCollectionStructure((prevState) => dummyCollection);
            }, 50);
        };
        getCollection();
    }, []);

    // Edit Info
    const editInfo = (infoName) => {
        setIsInfoModalUp(true);
    };

    const editInfoHandler = (data) => {
        setCollectionStructure((prevState) => {
            return {
                ...prevState,
                ...data,
            };
        });
        closeModalHandler();
    };

    // Delete field
    const deleteFieldHandler = (delFieldId) => {
        setCollectionStructure(() => {
            const newFields = collectionStructure.fields.filter(
                (field) => field.id !== delFieldId
            );
            return { ...collectionStructure, fields: newFields };
        });
    };

    // Open modal to edit an existing field
    const openEditFieldModal = (editFieldId) => {
        const field = collectionStructure.fields.find(
            (field) => field.id === editFieldId
        );
        setIsFieldModalUp(true);
        setCurrentField(field);
    };

    // Open modal to add new field
    const openAddFieldModal = () => {
        setCurrentField({});
        setIsFieldModalUp(true);
    };

    // Close modal
    const closeModalHandler = () => {
        // Toggle modal
        setIsFieldModalUp(false);
        setIsInfoModalUp(false);
    };

    // Add field to collection state
    const addField = (field) => {
        setCollectionStructure((prevState) => {
            const fields = [...prevState.fields];
            const ids = fields.map((field) => field.id);
            const id = getUniqueId(ids);
            field['id'] = id;
            field['status'] = 'new';
            fields.push(field);
            const newState = {
                ...prevState,
                fields,
            };
            return newState;
        });
    };

    // Edit field on collection state
    const editField = (field) => {
        setCollectionStructure((prevState) => {
            const fields = [...prevState.fields];
            const index = fields.indexOf(currentField);
            field.status = field.status === 'new' ? field.status : 'updated';
            field['id'] = currentField.id;
            fields[index] = field;
            const newState = {
                ...prevState,
                fields,
            };
            return newState;
        });
    };

    // Add or edit field
    const submitFieldHandler = (fieldData) => {
        const id = currentField.id;
        if (!id) {
            // Add new field
            addField(fieldData);
        } else if (!isObjEqual(fieldData, currentField)) {
            // Update equal
            editField(fieldData);
        }
        closeModalHandler();
        setCurrentField({});
    };

    // Define field modal element
    let fieldModalElement;
    if (isFieldModalUp) {
        let addFieldEl;
        if (Object.keys(currentField).length === 0) {
            addFieldEl = <AddFieldForm isNew onSubmit={submitFieldHandler} />;
        } else {
            addFieldEl = (
                <AddFieldForm
                    name={currentField.name}
                    type={currentField.type}
                    required={currentField.required}
                    onSubmit={submitFieldHandler}
                />
            );
        }
        fieldModalElement = (
            <Modal closeModal={closeModalHandler}>{addFieldEl}</Modal>
        );
    }

    // Define info modal element
    let infoModalElement;
    if (isInfoModalUp) {
        let addCollectionInfoEl;
        addCollectionInfoEl = (
            <AddCollectionInfo
                name={collectionStructure.name}
                description={collectionStructure.description}
                public={collectionStructure.public}
                onSubmit={editInfoHandler}
            />
        );
        infoModalElement = (
            <Modal closeModal={closeModalHandler}>{addCollectionInfoEl}</Modal>
        );
    }

    return (
        <main className="new-collection-page">
            <CollectionInfo
                name={collectionStructure.name}
                description={collectionStructure.description}
                public={collectionStructure.public}
                editInfo={editInfo}
            />
            <hr />
            <FieldsTable
                fields={collectionStructure.fields}
                deleteField={deleteFieldHandler}
                editField={openEditFieldModal}
                addField={openAddFieldModal}
            />
            {fieldModalElement}
            {infoModalElement}
        </main>
    );
};

export default NewCollection;
