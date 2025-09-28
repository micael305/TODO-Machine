import ReactDOM from 'react-dom';
import './Modal.css'

function Modal({children}) {

    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            {children} {/*Teletransporamos lo que sea que recibamos como children */}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };