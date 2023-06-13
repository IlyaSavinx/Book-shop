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
				className={"input_submit"}
				isEmpty={false}
				isValid={false}
				id={""}
				callback={() => {}}
			/>
			<Button
				className="button button-submit"
				content="Sign-in"
				callback={() => {}}
				isActive={true}
				buttonStyle={{backgroundColor: 'rgb(232, 66, 66)'}}
			/>
			<Button
				className="button button-submit"
				content="Sign-up"
				callback={() => {}}
				isActive={true}
			/>
		</div>
	);
};

export default MainHeader;
