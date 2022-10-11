import './CollectionMainInfo.css';


const CollectionMainInfo = props => {
    return (
        <section className='collection-main-info'>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </section>
    );
};


export default CollectionMainInfo;