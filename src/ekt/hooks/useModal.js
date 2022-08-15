import { useDispatch, useSelector } from 'react-redux';
import { onCloseModal, onOpenModal } from '../../store';


export const useModal = () => {

    const dispatch = useDispatch();

    const { 
        isModalOpen
    } = useSelector( state => state.modal );

    const openModal = () => {
        dispatch( onOpenModal() )
    }

    const closeModal = () => {
        dispatch( onCloseModal() )
    }

    const toggleModal = () => {
        (isModalOpen)
            ? openModal()
            : closeModal();
    }



    return {
        //* Propiedades
        isModalOpen,
        //* Métodos
        closeModal,
        openModal,
        toggleModal,
    }

}