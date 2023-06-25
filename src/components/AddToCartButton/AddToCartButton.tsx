import "./AddToCartButton.css";
import { useDispatch } from "react-redux";
import CartIcon from "../Icons/CartIcon";
import { setCartBook } from "../../redux/action-creators";
import { IBookInCart } from '../../types';

const AddToCartButton = ({bookCartStatus, title, subtitle, isbn13, price, count = 1, image }:IBookInCart) => {
	const dispatch = useDispatch()
    
    const handleCartClick = (book: IBookInCart) => {
        dispatch(setCartBook(book))
    }
    return (
        !bookCartStatus?
        <div className="add-to-cart" onClick={() => handleCartClick({ title, subtitle, isbn13, price, count, image })}>
        <CartIcon width='26' height='26' color='#fff' />
        <span>Add to Basket</span>
        </div>

        :<div className="in-cart"> added to cart</div>
	);
};
export default AddToCartButton;