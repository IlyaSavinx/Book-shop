import { BookCardsGrid } from "../BookCardGrid"
import CartPopup from '../CartPopup/CartPopup';
import { useSelector } from 'react-redux';
import { IStoreState } from '../../types';

const SearchBookPage = () => {
    const cartPopupStatus = useSelector((store:IStoreState)=>store.ui.cartPopupStatus)

        return (
            <div className="page-container">

                <BookCardsGrid />
                {cartPopupStatus ? <CartPopup /> : <></>}
            </div>

        
        )
}
export default SearchBookPage