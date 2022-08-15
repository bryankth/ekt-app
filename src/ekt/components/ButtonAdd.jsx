import { useProduct } from '../hooks/useProduct';
import { useModal } from "../hooks/useModal";

export const ButtonAdd = () => {

    const { openModal } = useModal();
    const { setActiveProduct } = useProduct();

    const handleNew = () => {
        setActiveProduct({
            _id: '',
            name: '',
            price: '',
        });
        console.log('open')
        openModal();
    }

  return (
    <button
        className="btn btn-primary fab"
        onClick={ handleNew }
    >
        <i className="fas fa-plus"></i>
    </button>
  )
}