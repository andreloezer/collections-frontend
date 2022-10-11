import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';


import './DialogBox.css';


const DialogBox = props => {
 
     const element = (
        <CSSTransition
            in={props.isModalActive}
            timeout={props.timeout}
            classNames='dialog-box'
            mountOnEnter
            unmountOnExit
        >
            <dialog className={`dialog-box ${props.className}`}>
                {props.children}
            </dialog>
        </CSSTransition>
     );
    
    // Render modal direct on the <body>, just above the react root element
    return ReactDOM.createPortal(element, document.getElementById('modal-hook'));
};


export default DialogBox;