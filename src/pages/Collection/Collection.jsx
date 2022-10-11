import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Button from '../../shared/components/Button/Button';
import ItemSetup from './ItemSetup';
import Modal from '../../layout/Modal/Modal';
import { DISPLAY_ITEMS_AS_TABLE, DISPLAY_ITEMS_AS_GRID } from './StyleConstant';
import { getUniqueId } from '../../shared/util/getUniqueId';
import './Collection.css';

// Components
import CollectionMainInfo from './CollectionMainInfo/CollectionMainInfo';
import CollectionItems from './CollectionItems/CollectionItems';
import CollectionToolbar from './CollectionToolbar/CollectionToolbar';

const DUMMY = {
    id: 1,
    name: 'Dummy Collection',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget arcu risus. Suspendisse non mollis leo. Vestibulum rhoncus sapien a sodales efficitur. Quisque magna erat, convallis sit amet sem posuere, eleifend interdum lectus. Donec quam augue, dapibus aliquam pharetra non, rhoncus vel tellus. Vivamus vel elit ultricies, accumsan lorem eu, ultrices augue. Fusce auctor erat sit amet odio cursus efficitur. Aenean tincidunt eros a risus laoreet dignissim.',
    owned: true,
    public: true,
    fields: [
        { id: 1, name: 'Title', type: 'text', required: true },
        { id: 2, name: 'Author', type: 'text', required: true },
        { id: 3, name: 'Year of Publication', type: 'number', required: false },
        { id: 4, name: 'Read', type: 'checkbox', required: true },
    ],
    items: [
        {
            id: 1,
            fields: {
                1: 'Don Quixote',
                2: 'Miguel de Cervantes',
                3: 1605,
                4: true,
            },
            selected: true,
            status: 'original',
        },
        {
            id: 2,
            fields: {
                1: 'Divine Comedy',
                2: 'Dante Alighieri',
                3: 1472,
                4: true,
            },
            selected: false,
            status: 'original',
        },
        {
            id: 3,
            fields: { 1: 'O Cortiço', 2: 'Aluísio Azevedo', 3: 1890, 4: true },
            selected: false,
            status: 'original',
        },
        {
            id: 5,
            fields: {
                1: 'Crime and Punishment',
                2: 'Fyodor Dostoevsky',
                3: 1866,
                4: false,
            },
            selected: false,
            status: 'original',
        },
        {
            id: 6,
            fields: {
                1: 'The Brothers Karamazov',
                2: 'Fyodor Dostoevsky',
                3: 1879,
                4: true,
            },
            selected: false,
            status: 'original',
        },
        {
            id: 7,
            fields: { 1: 'Book', 2: 'Author', 3: null, 4: true },
            selected: false,
            status: 'original',
        },
    ],
};

const Collection = (props) => {
    console.log('Render: Collection');

    const [collection, setCollection] = useState();
    const [editable, setEditable] = useState(false);
    const [isItemModalUp, setIsItemModalUp] = useState(false);
    const [currentItem, setCurrentItem] = useState({});

    useEffect(() => {
        setTimeout(() => {
            setCollection(DUMMY);
        }, 200);
    }, []);

    // Toggle items edition
    const editHandler = () => {
        setEditable(!editable);
    };

    // Select all items
    const selectAllHandler = (event) => {
        setCollection((prevState) => {
            const items = [...prevState.items];
            for (const item of items) {
                item.selected = event.target.checked;
            }
            return {
                ...prevState,
                items,
            };
        });
    };

    // Select item
    const selectItemHandler = (index, value) => {
        setCollection((prevState) => {
            const items = [...prevState.items];
            items[index].selected = value;
            return {
                ...prevState,
                items,
            };
        });
    };

    const deleteItemHandler = (index) => {
        // Remove item
        setCollection((prevState) => {
            const items = [...prevState.items];
            items.splice(index, 1);
            return {
                ...prevState,
                items,
            };
        });
    };

    // Open add item modal
    const addItemHandler = () => {
        setCurrentItem({
            fields: [],
            status: 'adding',
        });
        setIsItemModalUp(true);
    };

    const closeModalHandler = () => {
        // ITS REMOVING THE MODAL RIGHT AWAY, NOT ALLOWING FOR THE MODAL ANIMATION
        setIsItemModalUp(false);
    };

    // Open modal to edit item
    const editItemHandler = (index) => {
        const item = {
            ...collection.items[index],
        };
        setCurrentItem(item);
        setIsItemModalUp(true);
    };

    const addItem = (itemFields) => {
        setCollection((prevState) => {
            const items = [...prevState.items];
            const id = getUniqueId(items.map((item) => item.id));
            items.push({
                id: id,
                selected: false,
                status: 'new',
                fields: itemFields,
            });
            return {
                ...prevState,
                items,
            };
        });
    };

    const editItem = (itemFields) => {
        setCollection((prevState) => {
            const items = [...prevState.items];
            const index = items.findIndex((item) => item.id === currentItem.id);
            const item = items[index];
            item.fields = itemFields;
            items[index] = item;
            return {
                ...prevState,
                items: items,
                status: 'updated',
            };
        });
    };

    const submitItemHandler = (itemFields) => {
        if (currentItem.status === 'adding') {
            addItem(itemFields);
        } else {
            editItem(itemFields);
        }
        closeModalHandler();
        setCurrentItem({});
    };

    // Setup Modal
    let modalElement;
    if (isItemModalUp) {
        let addItemEl;
        if (currentItem.status === 'adding') {
            addItemEl = (
                <ItemSetup
                    fields={collection.fields}
                    isNew
                    onSubmit={submitItemHandler}
                />
            );
        } else {
            addItemEl = (
                <ItemSetup
                    fields={collection.fields}
                    item={currentItem}
                    onSubmit={submitItemHandler}
                />
            );
        }
        modalElement = (
            <Modal closeModal={closeModalHandler}>{addItemEl}</Modal>
        );
    }

    let collectionDisplay;
    if (collection) {
        collectionDisplay = (
            <React.Fragment>
                <CollectionMainInfo
                    name={collection.name}
                    description={collection.description}
                />
                <CollectionToolbar id={collection.id} edit={editHandler} />
                <CollectionItems
                    fields={collection.fields}
                    items={collection.items}
                    style={DISPLAY_ITEMS_AS_TABLE}
                    editable={editable}
                    selectItem={selectItemHandler}
                    selectAll={selectAllHandler}
                    editItem={editItemHandler}
                    deleteItem={deleteItemHandler}
                />
                {editable && (
                    <Button
                        className="icon plus-btn"
                        type="button"
                        title="Add new field"
                        onClick={addItemHandler}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                )}
                {modalElement}
            </React.Fragment>
        );
    } else {
        collectionDisplay = <h2>Error - 404</h2>;
        // Loading collection, create spinner here
        // Show a Spinner here
    }

    return <main className="collection">{collectionDisplay}</main>;
};

export default Collection;
