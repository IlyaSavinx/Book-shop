import {
	SET_USER,
	SIGN_UP,
	SIGN_IN,
	ACTIVATE,
	GET_USER,
	LOG_OUT,
	RESET_PASSWORD,
} from "../action-types/index";
import { IUserData, IAuthorizeData, ISignIn, ITokens } from "../../types";
import { takeEvery, put } from "redux-saga/effects";

const signUp = (user: IUserData) => {
	return {
		type: SIGN_UP,
		user,
	};
};

const signIn = (signInData: ISignIn) => {
	return {
		type: SIGN_IN,
		signInData,
	};
};

const logOut = () => {
	return {
		type: LOG_OUT,
	};
};

const setUser = (user: IUserData) => ({
	type: SET_USER,
	user,
});

const getUser = () => {
	return {
		type: GET_USER,
	};
};

const resetPassword = (email: any) => {
	return {
		type: RESET_PASSWORD,
		email,
	};
};

export function* getActualToken(): any {
	const accessToken = localStorage.access;

	const verifyResp: Response = yield fetch(
		`https://studapi.teachmeskills.by/auth/jwt/verify/`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				token: accessToken,
			}),
		}
	);

	if (verifyResp.status !== 200) {
		const refreshResp: Response = yield fetch(
			`https://studapi.teachmeskills.by/auth/jwt/refresh/`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					refresh: localStorage.refresh,
				}),
			}
		);
		const data: { access: string } = yield refreshResp.json();
		const { access } = data;
		localStorage.setItem("access", access);
		return access;
	}
	return accessToken;
}

function* getUserData() {
	const accessToken: string = yield getActualToken();
	const userResp: Response = yield fetch(
		`https://studapi.teachmeskills.by/auth/users/me/`,
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
		}
	);
	if (userResp.status === 200) {
		const user: IUserData = yield userResp.json();
		yield put(setUser(user));
		window.location.pathname = "/books/new";
	}
}

function* signUpUser(action: any) {
	const { user } = action;
	const URL = `https://studapi.teachmeskills.by/auth/users/`;
	const resp: Response = yield fetch(URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});
}

function* signInUser(action: any) {
	const { signInData } = action;

	const URL = `https://studapi.teachmeskills.by/auth/jwt/create/`;
	const resp: Response = yield fetch(URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(signInData),
	});

	if (resp.status === 200) {
		const tokens: ITokens = yield resp.json();
		const { access, refresh } = tokens;
		localStorage.setItem("access", access);
		localStorage.setItem("refresh", refresh);

		yield put(getUser());
	}
}

function* resetUserPassword(action: any) {
	const { email } = action;
	const URL = `https://studapi.teachmeskills.by/auth/users/reset_password/`;
	const resp: Response = yield fetch(URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(email),
	});
}

function* watcherUser() {
	yield takeEvery(SIGN_UP, signUpUser);
	yield takeEvery(SIGN_IN, signInUser);
	yield takeEvery(ACTIVATE, fetchActivate);
	yield takeEvery(GET_USER, getUserData);
	yield takeEvery(RESET_PASSWORD, resetUserPassword);
}

const activate = (auth: IAuthorizeData) => {
	return {
		type: ACTIVATE,
		auth,
	};
};

function* fetchActivate(action: any) {
	const URL = `https://studapi.teachmeskills.by/auth/users/activation/`;
	const resp: Response = yield fetch(URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(action.auth),
	});
}

export {
	watcherUser,
	signUp,
	activate,
	signIn,
	setUser,
	logOut,
	resetPassword,
};
