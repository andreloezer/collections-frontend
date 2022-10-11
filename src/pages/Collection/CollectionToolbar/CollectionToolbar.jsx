import { useState } from 'react';
import {
    faBars,
    faTh,
    faEdit,
    faCog
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './CollectionToolbar.css';


// Components
import ToolbarButton from './ToolbarButton/ToolbarButton';
import ToolbarLink from './ToolbarLink/ToolbarLink';


const CollectionToolbar = props => {

    const [ LIST, GRID ] = [ 'LIST', 'GRID' ];

    const [ itemsDisplay, setItemsDisplay ] = useState(LIST)
    const [ owner, setOwner ] = useState(true);

    const buttons = [
        {
            icon: faBars,
            func: 'toggleDisplay'
        }
    ];

    const toggleDisplay = () => {
        if (itemsDisplay === LIST) {
            setItemsDisplay(GRID);
        } else {
            setItemsDisplay(LIST);
        }
    };

    const toggleEdit = () => {
        console.log('edit')
        props.edit();
    };

    const buttonsDisplay = [
        <ToolbarButton btnClick={toggleDisplay} key='1' >
            {<FontAwesomeIcon icon={itemsDisplay === LIST ? faBars : faTh} />}
        </ToolbarButton>,
    ];

    if (owner) {
        buttonsDisplay.push(
            <ToolbarButton btnClick={toggleEdit} key='2' >
                {<FontAwesomeIcon icon={faEdit} />}
            </ToolbarButton>,
            <ToolbarLink href={`/collection/edit/${props.id}`} key='3' >
                {<FontAwesomeIcon icon={faCog} />}
            </ToolbarLink>
        );
    }

    return (
        <header className='collection-toolbar'>
            <ul>
                {buttonsDisplay}
            </ul>
        </header>
    );
};


export default CollectionToolbar;