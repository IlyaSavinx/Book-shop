import "./mainHeader.css";
import { Button } from "../Button";
import { Input } from "../Input";
import { CartButton } from "../CartButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IStoreState } from "../../types";
import { loadSearchBooks, setActivePage, setSearchRequest } from "../../redux/action-creators";

const MainHeader = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const searchRequest = useSelector((store: IStoreState) => store.ui.searchRequest)
    const [request, setRequest] = useState(searchRequest)

	const handleRequestChange = (e: any) => {

        setRequest(e.target.value)
		dispatch(loadSearchBooks(e.target.value))
		dispatch(setSearchRequest(e.target.value))
		if (e.target.value) {
			dispatch(setActivePage('search'))
			setTimeout(()=>navigate('/search'),500)
		} else {
			returnToDefaultPage()
		}
    }

	const returnToDefaultPage = () => {
		dispatch(setActivePage('books/new'))
		setTimeout(()=>navigate('/books/new'),500)
	}

	return (
		<div className="header-container">
			<div className="header-logo">BookShop</div>
			<Input
				type={"text"}
				name={"Search"}
				
				isEmpty={false}
				isValid={false}
				id={""}
				callback={handleRequestChange}
			/>
			<Button
				className="button button-submit"
				content="Sign-in"
				callback={() => { } }
				isActive={true} children={""}				
			/>
			<Button
				className="button button-submit"
				content="Sign-up"
				callback={() => { } }
				isActive={true} children={""}			/>
		<CartButton />
		</div>
		
	);
};

export default MainHeader;
