import './button.css';
import { IButton } from '../../types';

  const Button = (props: IButton) => {
  const {content, isActive, callback} = props;
  return (
      <button
          className="button"
          disabled={!isActive}
          onClick={() => callback()}
          style={{opacity: isActive ? 1 : 0.5}}
      >
          {props.children || content}
      </button>
  )
  }
  export default Button;

// import "./AddToCartButton.css";
// import { useDispatch, useSelector } from "react-redux";
// import { IStoreState } from "../../types";
// import CartIcon from "../Icons/CartIcon";
// import { setCartBook } from "../../redux/action-creators";
// import { IBookInCart } from '../../types';

// const AddToCartButton = ({bookCartStatus, title, subtitle, isbn13, price, count = 1, image }:IBookInCart | IButton) => {
// 	const dispatch = useDispatch()
    
//     const handleCartClick = (book: IBookInCart) => {
//         dispatch(setCartBook(book))
//     }
//     return (
//         !bookCartStatus?
//         <div className="add-to-cart" onClick={() => handleCartClick({ title, subtitle, isbn13, price, count, image })}>
//         <CartIcon width='26' height='26' color='#fff' />
//         <span>Add to cart</span>
//         </div>

//         :<div className="in-cart"> In the cart</div>
// 	);
// };
// export default AddToCartButton;