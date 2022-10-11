import './CollectionArticle.css';


const CollectionArticle = props => {
    return (
        <a className='collection-article' href={`/collection/${props.id}`}>
            <article>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <div>
                    <span>Fields: {props.fields}</span>
                    <span>Items: {props.items}</span>
                </div>
            </article>
        </a>
    );
};


export default CollectionArticle;