import { MainHeader } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState } from '../../types';
import CartPopup from '../CartPopup/CartPopup';
import { useEffect } from 'react';
import { setActivePage } from '../../redux/action-creators';
import { SelectedBook } from '../SelectedBook';
const SelectedBookPage = () => {
    const cartPopupStatus = useSelector((store: IStoreState) => store.ui.cartPopupStatus)
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setActivePage('selected'))
    }, []);

    return (<>
        <MainHeader />
        
        <SelectedBook/>
        {cartPopupStatus?<CartPopup />:<></>}
    </>

    )
}

export default SelectedBookPage;