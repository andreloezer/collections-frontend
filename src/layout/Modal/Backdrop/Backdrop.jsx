import ReactDom from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './Backdrop.css';

const Backdrop = (props) => {
    // Forward modal close
    const closeModalHandler = () => {
        props.closeModal();
    };

    const element = (
        <CSSTransition
            in={props.isModalActive}
            timeout={props.timeout}
            classNames="backdrop"
            mountOnEnter
            unmountOnExit
        >
            <div className="backdrop" onClick={closeModalHandler}></div>
        </CSSTransition>
    );

    return ReactDom.createPortal(
        element,
        document.getElementById('backdrop-hook')
    );
};

export default Backdrop;
