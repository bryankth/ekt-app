import Modal from 'react-modal';

import React, { useMemo, useState } from 'react'
import { useModal } from '../hooks/useModal';
import { useProduct } from '../hooks/useProduct';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};


Modal.setAppElement('#root');

export const ModalCreate = () => {
    const { isModalOpen, closeModal } = useModal();
    const [ formSubmitted, setFormSubmitted ] = useState(false);
    const { startSavingProduct } = useProduct();
    const [formValues, setFormValues] = useState({
        name: '',
        price: '',
    });

    const onInputChanged = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onSubmit = async( product ) => {
        product.preventDefault();
        setFormSubmitted(true);

        if ( formValues.name.length <= 0 ) return;
        
        console.log(formValues);

        await startSavingProduct( formValues );
        closeModal();
        setFormSubmitted(false);
    }

    const titleClass = useMemo(() => {
        if ( !formSubmitted ) return '';

        return ( formValues.name.length > 0 )
            ? ''
            : 'is-invalid';

    }, [ formValues.name, formSubmitted ])

    const onCloseModal = () => {
        console.log('cerrando modal');
        closeModal();
    }

  return (
    <Modal 
        isOpen={ isModalOpen }
        onRequestClose={ onCloseModal }
        style={ customStyles }
        className="modal"
        overlayClassName="modal-background"
        closeTimeoutMS={ 200 }
    >
       <h1> Nuevo producto </h1>
<hr />
<form className="container" onSubmit={ onSubmit }>

    <div className="form-group mb-2">
        <label>Nombre</label>
        <input 
        name="name"
        className={ `form-control ${ titleClass }` } 
        value={ formValues.name }
        onChange={ onInputChanged }
        placeholder="Ej. Leche" />
    </div>

    <div className="form-group mb-2">
        <label>Precio</label>
        <input 
        type="number"
        name="price"
         className={ `form-control ${ titleClass }` }
        value={ formValues.price }
        onChange={ onInputChanged }
        placeholder="Ej. $34.50" />
    </div>

    <hr />

    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
    >
        <i className="far fa-save"></i>
        <span> Guardar</span>
    </button>

</form>

    </Modal>
  )
}
