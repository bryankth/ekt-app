import { useDispatch, useSelector } from 'react-redux';
import { api } from '../../api';
import { onAddNewProduct, onDeleteProduct, onLoadProducts, onSetActiveProduct, onUpdateProduct } from '../../store';

export const useProduct = () => {
  
    const dispatch = useDispatch();
    const { products, activeProduct } = useSelector( state => state.product );

    const setActiveProduct = ( productAction ) => {
        dispatch( onSetActiveProduct( productAction ) )
    }

    const startSavingProduct = async( productAction ) => {
        
        try {
            console.log(productAction)
            if( productAction.id ) {
                // Actualizando
                await api.put(`/products/${ productAction.id }`, productAction );
                dispatch( onUpdateProduct({ productAction }) );
                return;
            } 
            // Creando
            const { data } = await api.post('/products', productAction );
            dispatch( onAddNewProduct({ ...productAction, id: data.id }) );

        } catch (error) {
            console.log(error);
        }        
    }

    const startDeletingProduct = async( product ) => {
        try {
            await api.delete(`/products/${ product._id }` );
            dispatch( onDeleteProduct( product ) );
        } catch (error) {
            console.log(error);
        }
    }

    const startLoadingProducts = async() => {
        try {
            const { data } = await api.get('/products');
            dispatch( onLoadProducts( data ) );

        } catch (error) {
          console.log('Error cargando los productos');
          console.log(error)
        }
    }
    
    return {
        //* Propiedades
        activeProduct,
        products,
        hasProductSelected: !!activeProduct,
        //* Métodos
        setActiveProduct,
        startDeletingProduct,
        startLoadingProducts,
        startSavingProduct,
    }
}