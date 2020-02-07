import React, { MouseEventHandler, FunctionComponent } from 'react';

type modProps = {
    closeModal: MouseEventHandler;
    modalState: boolean;
    title: string;
};

const Modal: FunctionComponent<modProps> = props => {
    if (!props.modalState) return null;

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={props.closeModal} />
            <div className="modal-content">
                <div className="box">
                    <div className="content">
                        <h3>{props.title}</h3>
                        {props.children}
                    </div>
                </div>
            </div>
            <button
                className="modal-close is-large"
                onClick={props.closeModal}
            />
        </div>
    );
};

export default Modal;
