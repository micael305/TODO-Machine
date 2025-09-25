import ReactDOM from 'react-dom';

function Modal({children}) {

    return ReactDOM.createPortal(
        <div className='Modal'>
            {children} {/*Teletransporamos lo que sea que recibamos como children */}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };