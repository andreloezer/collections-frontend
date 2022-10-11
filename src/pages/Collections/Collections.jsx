import { useState, useEffect } from 'react';
// import { toCapitalizeAll } from '../../shared/utils';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


import './Collections.css';
import CollectionArticle from './CollectionArticle/CollectionArticle';


const Collections = props => {
    // const collections = []; // MAYBE OT SHOULD COME FROM THE STATE

    const [collections, setCollections] = useState([]);

    useEffect(() => {
        const dummy = [
            {
                id: 1,
                name: 'Dummy Collection',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget arcu risus. Suspendisse non mollis leo. Vestibulum rhoncus sapien a sodales efficitur. Quisque magna erat, convallis sit amet sem posuere, eleifend interdum lectus. Donec quam augue, dapibus aliquam pharetra non, rhoncus vel tellus. Vivamus vel elit ultricies, accumsan lorem eu, ultrices augue. Fusce auctor erat sit amet odio cursus efficitur. Aenean tincidunt eros a risus laoreet dignissim.',
                fields: 4,
                items: 10
            },
            {
                id: 2,
                name: 'Another Dummy',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget arcu risus. Suspendisse non mollis leo. Vestibulum rhoncus sapien a sodales efficitur. Quisque magna erat, convallis sit amet sem posuere, eleifend interdum lectus. Donec quam augue, dapibus aliquam pharetra non, rhoncus vel tellus. Vivamus vel elit ultricies, accumsan lorem eu, ultrices augue. Fusce auctor erat sit amet odio cursus efficitur. Aenean tincidunt eros a risus laoreet dignissim.',
                fields: 5,
                items: 15
            }
        ];

        setCollections( async () => {
            setTimeout(() => {
                console.log(collections)
                console.log(dummy)
                setCollections(dummy);
                console.log(collections)
                console.log('timeout')
            }, 200000);
        });

        setCollections();

    }, []);

    console.log(collections)

    

    let collectionsDisplay;
    console.log(collections)
    if (collections && collections.length) {
        console.log(collections)
        console.log(collections[0])
        console.log(collections[1])
        const CollectionList = [];
        collections.forEach((collection, index) => {
            console.log(collection)
            CollectionList.push(
                <li key={index}>
                    <CollectionArticle
                        id={collection.id}
                        name={collection.name}
                        description={collection.description}
                        fields={collection.fields}
                        items={collection.items}
                    />
                </li>
            );
        });
        
        collectionsDisplay = <ul>{CollectionList}</ul>;
    } else { // react {...props}
        collectionsDisplay = <div className="no-collections">
            <p>Oh no, you don't have any collection yet.</p>
            <span> Add your first collection now:</span>
            <Link to="/collection/new" className="plus-btn icon" title='Create new collection' >
                <FontAwesomeIcon icon={faPlus} />
            </Link>
        </div>;
    }
    return (
        <main className="collections-page">
            <h1>Your Collections</h1>
            {collectionsDisplay}
        </main>
    );
};


export default Collections;