import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';

import DialogBox from './DialogBox/DialogBox';
import Backdrop from './Backdrop/Backdrop';
import './Modal.css';

const Modal = (props) => {
    const [isModalActive, setIsModalActive] = useState(false);

    // Transition timeout
    const timeout = 200;

    // Close modal
    const closeModal = () => {
        // Set state to false
        setIsModalActive(false);

        // Enable page scroll
        document.body.classList.remove('no-scroll');

        // Wait the transition before unmounting
        setTimeout(() => {
            props.closeModal();
        }, timeout);
    };

    useEffect(() => {
        // Actvate modal
        setIsModalActive(true);
        // Block page scroll
        document.body.classList.add('no-scroll');
        // Set animation time
        document.documentElement.style.setProperty(
            '--animation-time',
            `${timeout}ms`
        );
        return () => {
            closeModal();
        };
    }, []);

    return (
        <React.Fragment>
            <DialogBox isModalActive={isModalActive} timeout={timeout}>
                {props.children}
            </DialogBox>
            <Backdrop
                timeout={timeout}
                closeModal={closeModal}
                isModalActive={isModalActive}
            />
        </React.Fragment>
    );

    // Render modal direct on the <body>, just above the react root element
    // return ReactDOM.createPortal(element, document.getElementById('modal-hook'));
};

export default Modal;
