import "./mainHeader.css";
import { Button } from "../Button";
import { Input } from "../Input";
import { CartButton } from "../CartButton";

const MainHeader = () => {
	return (
		<div className="header-container">
			<div className="header-logo">BookShop</div>
			<Input
				type={"text"}
				name={"Search"}
				
				isEmpty={false}
				isValid={false}
				id={""}
				callback={() => {}}
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
