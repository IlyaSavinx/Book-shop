import { BookCardsGrid } from "../BookCardGrid"
import { CartPopup } from "../CartPopup"
import { MainHeader } from "../MainHeader"
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState } from '../../types';
import { useEffect } from 'react';
import { setActivePage } from "../../redux/action-creators";

const NewBookPage = () => {
    const cartPopupStatus = useSelector((store:IStoreState)=>store.ui.cartPopupStatus)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setActivePage('new'))
    }, []);

    return (
        <div className="page-container">

            <MainHeader />
           
            <BookCardsGrid />
            {cartPopupStatus?<CartPopup />:<></>}
        </div>

        
    )
}
export default NewBookPage