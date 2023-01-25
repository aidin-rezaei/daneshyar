
import { XMarkIcon } from '@heroicons/react/24/solid';
// import { useDispatch, useSelector } from 'react-redux';
import './Modal.scss'
const Modal = ({ children, title , setstate }) => {
    // const dispatch = useDispatch();
    // const MODAL = useSelector(state => state.modal);
    return (
        <div className='modal'>
            <div className='modal__close' onClick={() => { setstate(false) }}></div>
            <div className='modal__content' >
                <div className='modal__box_title'>
                    <div className='modal__icon__close' onClick={() => { setstate(false) }}><XMarkIcon /></div>
                    <h4>{title}</h4>
                </div>
                {children}

            </div>
        </div>
    );
}

export default Modal;