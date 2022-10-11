import { Link } from 'react-router-dom';
import './ToolbarLink.css';


const ToolbarLink = props => {
    return (
        <Link to={props.href} className='collection-toolbar-btn'>
            {props.children}
        </Link>
    );
};


export default ToolbarLink;