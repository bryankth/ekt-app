import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Table, Button, Container } from 'reactstrap'
import { useModal } from '../hooks/useModal'
import { useProduct } from '../hooks/useProduct'
import { ButtonAdd } from './buttonAdd'

export const TableList = () => {

    const { startLoadingProducts, onUpdateProduct, startDeletingProduct, products, setActiveProduct, activeProduct } = useProduct();
    const { openModal } = useModal();

    const [formValues, setFormValues] = useState({
       _id: '',
       name:'',
       price:'' 
    });

    useEffect(() => {
        startLoadingProducts()
      }, [])
    const delProduct = async(el) => {
        await startDeletingProduct( el );
    }
    const upProduct = async( el ) => {
        openModal();
        setActiveProduct( el );
    }

    useEffect(() => {
        if ( activeProduct !== null ) {
            setFormValues({ ...activeProduct });
        }    
        
      }, [ activeProduct ])

  return (
    <>
    <Container>
        <br />
        <ButtonAdd />
        <Table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {products.map((element) =>(
                    <tr>
                        <td>{ element.name }</td>
                        <td>{ element.price }</td>
                        <td><Button color="primary"
                        onClick={ ()=> { upProduct( element ) } }>Editar</Button> <Button color="danger" onClick={ ()=> {delProduct(element); } } >Eliminar</Button> </td>
                    </tr> 
                ))}
            </tbody>
        </Table>
    </Container>
    </>
  )
}
