import { useState } from "react";
import { InputAutorization } from '../InputAutorization/InputAutorization'
import { Button } from "../Button";
import './SignIn.css'
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/action-creators";

export const SignIn = () => {
	const [emailText, setEmailText] = useState("");
	const [passwordText, setPasswordText] = useState("");

	const dispatch = useDispatch();

	
    return (
		<form className="sign-in-form">
			<InputAutorization
				type="email"
				id="input-email"
				placeholder="Your email"
				callback={(e: any) => setEmailText(e.target.value)}
				className={"input"}
				name="input-2"
				isRequired={true}
				isEnable={true}
				isEmpty={emailText === "" ? true : false}
				isValid={true}
				
			/>

			<InputAutorization
				type="password"
				id="input-password"
				placeholder="Your password"
				callback={(e: any) => setPasswordText(e.target.value)}
				className={"input"}
				name="input-3"
				isRequired={true}
				isEnable={true}
				isEmpty={passwordText === "" ? true : false}
				isValid={passwordText.length < 8 && passwordText !== "" ? false : true}
			/>
			<a className="form-text-link" href="#">
				Forgot password?
			</a>

            <Button
				className={"button button-sign"}
				content="Sign In"

				callback={() => {
					dispatch(signIn({
						"email": emailText,
						"password": passwordText,
					}));

				} } children={""}			/>

			<p className="form-text-link">
				Don’t have an account? {''}
				<NavLink to={"/sign_up"} className={"form-link-up"}>
				Sign Up 
				</NavLink>
			</p>
		</form>
	);
};
