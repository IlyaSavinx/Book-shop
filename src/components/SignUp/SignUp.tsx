import { useState } from "react";
import { InputAutorization } from '../InputAutorization/InputAutorization'
import { Button } from "../Button";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/action-creators";

export const SignUp = () => {
	const [nameText, setNameText] = useState("");
	const [emailText, setEmailText] = useState("");
	const [passwordText, setPasswordText] = useState("");
	const [passwordConfirmText, setPasswordConfirmText] = useState("");
	const dispatch = useDispatch()
	return (
		<form className="sign-in-form">
			<InputAutorization
			type="text"
			id="input-name"
			name="input-1"
			placeholder="Your name"
			isRequired={true}
			isEnable={true}
			isEmpty={nameText === "" ? true : false}
			isValid={true}
			callback={(e: any) => setNameText(e.target.value)}
				className={"input"}
			/>
			<InputAutorization
			type="email"
			id="input-email"
			name="input-2"
			placeholder="Your email"
			isRequired={true}
			isEnable={true}
			isEmpty={emailText === "" ? true : false}
			isValid={true}
			callback={(e: any) => setEmailText(e.target.value)}
				className={"input"}
				
			/>
			<InputAutorization
			type="password"
			id="input-password"
			name="input-3"
			placeholder="Your password"
			isRequired={true}
			isEnable={true}
			isEmpty={passwordText === "" ? true : false}
			isValid={passwordText.length < 8 && passwordText !== "" ? false : true}
			callback={(e: any) => setPasswordText(e.target.value)}
				className={"input"}
			/>
			<InputAutorization
				type="password"
				id="input-password-confirm"
				name="input-3"
				placeholder="Confirm password"
				isRequired={true}
				isEnable={true}
				isEmpty={passwordConfirmText === "" ? true : false}
				isValid={
					(passwordText === passwordConfirmText &&
						passwordConfirmText !== "") ||
					passwordConfirmText === ""
						? true
						: false
				}
				callback={(e: any) => setPasswordConfirmText(e.target.value)}
				className={"input"}
			/>


			<Button
				className={"button button-sign"}
				content="Sign Up"

				callback={() => {
					dispatch(signUp({
						"username": `${nameText}`,
						"email": `${emailText}`,
						"password": `${passwordText}`
					}));
				} } children={""}			/>

			<p className="form-text-link">
            Already have an account? {""}
				<NavLink to={"/sign_in"} className={"form-link-up"}>
					Sign In
				</NavLink>
			</p>
		</form>
	);
};
