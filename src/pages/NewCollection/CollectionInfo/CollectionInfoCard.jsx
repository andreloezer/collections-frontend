import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import Button from "../../../shared/components/Button/Button";
import { toCapitalize } from "../../../shared/util/capitalize";
import './CollectionInfoCard.css';

const CollectionInfoCard = props => {

    console.log(props)

    const editCard = () => {
        props.editInfo(props.name);
    };

    return (
        <div className={`collection-info-card ${props.className}`}>
            {/* <div>
                <span>{toCapitalize(props.name)}</span>
                <p>{props.value || `Add a ${props.name} to the collection`}</p>
            </div> */}
            <span>{toCapitalize(props.name)}</span>
            <p>{props.children}</p>
            <div>
                {/* <p>{props.value || `Add a ${props.name} to the collection`}</p> */}
                {/* <p>{props.children}</p> */}
                {/* <Button onClick={editCard} type='button' className="icon">
                    <FontAwesomeIcon icon={faPencilAlt} />
                </Button> */}
            </div>
            
            
            
        </div>
    );
};

export default CollectionInfoCard;