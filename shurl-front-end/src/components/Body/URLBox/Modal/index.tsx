import React, { MouseEventHandler, FunctionComponent } from 'react';

type modProps = {
    closeModal: MouseEventHandler;
    modalState: boolean;
    title: string;
};

const Modal: FunctionComponent<modProps> = props => {
    if (!props.modalState) return null;

    const content: any = !props.children?.toString().startsWith('http')
        ? '#'
        : props.children;

    return (
        <div role="modal" className="modal is-active">
            <div className="modal-background" onClick={props.closeModal} />
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{props.title}</p>
                </header>
                <section className="modal-card-body">
                    <a href={content}>{props.children}</a>
                </section>
                <footer className="modal-card-foot">
                    <button
                        className="button is-info"
                        onClick={props.closeModal}
                    >
                        OK
                    </button>
                </footer>
            </div>
            <button
                className="modal-close is-large"
                onClick={props.closeModal}
            />
        </div>
    );
};

export default Modal;
