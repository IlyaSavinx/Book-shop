import "./mainHeader.css";
import { Button } from "../Button";
import { Input } from "../Input";

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
		</div>
	);
};

export default MainHeader;
